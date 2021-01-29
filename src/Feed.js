import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import CreateAPost from "./CreateAPost";

function Feed() {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState("");
	const user = useSelector((state) => state.user.user);
	const [open, setOpen] = useState(false);

	const closeModal = (val) => {
		setOpen(val);
	};
	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			name: user.displayName,
			desciption: user.email,
			message: input,
			photoURL: user.photoURL || "",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input" onClick={() => setOpen(true)}>
					<CreateIcon style={{ color: "#0074b1" }} />
					<input placeholder="Start a Post" />
					{/* <CreateIcon />
					<form>
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form> */}
				</div>
				<CreateAPost open={open} onCloseModal={closeModal} />
				<div className="feed__inputOptions">
					<InputOption
						onClick={() => setOpen(true)}
						Icon={ImageIcon}
						title="Photo"
						color="#70b5f9"
					/>
					<InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
					<InputOption
						Icon={CalendarTodayIcon}
						title="Write article"
						color="#7fc15e"
					/>
				</div>
			</div>
			<FlipMove>
				{posts?.map(({ id, data: { name, desciption, message, photoURL } }) => (
					<Post
						key={id}
						name={name}
						description={desciption}
						photoURL={photoURL}
						message={message}
						post={{ name, desciption, message, photoURL }}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
