import React, { useState } from "react";
import { db } from "./firebase";
import "./CreatePostVideo.css";
import firebase from "firebase";
import "./CreatePostWithImage.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useSelector } from "react-redux";

function CreatePostVideo({ open, onCloseModal }) {
	const [input, setInput] = useState("");
	const [videoUrl, setVideoUrl] = useState("");
	const user = useSelector((state) => state.user.user);
	const sendPost = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			name: user.displayName,
			desciption: user.email,
			message: input,
			videoUrl: videoUrl,
			photoURL: user.photoURL || "",

			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
		setVideoUrl("");
		onCloseModal();
	};

	return (
		<div className="createVideo">
			<Dialog className="createApost__modal" open={open}>
				<h2 className="createVideo__title">Start a Post with Video</h2>
				<DialogContent>
					<input
						type="text"
						className="createVideo__input"
						onChange={(e) => setInput(e.target.value)}
						placeholder="What is on your mind?"
					/>
					<input
						placeholder="Video URL"
						type="text"
						value={videoUrl}
						className="createVideo__input"
						onChange={(e) => setVideoUrl(e.target.value)}
					/>
				</DialogContent>
				<DialogActions
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<button
						className="createVideo__cancelButton"
						onClick={() => onCloseModal(!open)}
					>
						Cancel
					</button>
					<button
						className="createVideo__postButton"
						button
						onClick={sendPost}
						type="submit"
					>
						Post
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CreatePostVideo;
