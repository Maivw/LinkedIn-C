import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useSelector } from "react-redux";
import { db } from "./firebase";
import firebase from "firebase";
import "./CreateApost.css";

function CreateAPost({ open, onCloseModal }) {
	console.log("checkopen", open);
	const [input, setInput] = useState("");
	const user = useSelector((state) => state.user.user);
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
		onCloseModal();
	};
	return (
		<div className="createPost">
			<Dialog className="createApost__modal" open={open}>
				<h2 className="createPost__title">Create a Post</h2>
				<DialogContent>
					<div className="userInfo__modal-subTitle">
						What do you want to talk about?
					</div>
					<input
						className="createPost__input"
						type="text"
						onChange={(e) => setInput(e.target.value)}
					/>
				</DialogContent>

				<DialogActions style={{ display: "flex" }}>
					<button
						className="createPost__title-post"
						button
						onClick={sendPost}
						type="submit"
					>
						Post
					</button>
					<button
						className="createPost__title-cancel"
						onClick={() => onCloseModal(!open)}
					>
						Cancel
					</button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default CreateAPost;
