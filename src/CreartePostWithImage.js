import React, { useState } from "react";
import { storage, db } from "./firebase";
import firebase from "firebase";
import "./CreatePostWithImage.css";
import Dialog from "@material-ui/core/Dialog";
import { useSelector } from "react-redux";

function CreartePostWithImage({ open, onCloseModal }) {
	const [clicked, setClicked] = useState(false);
	let allInputs = { imgUrl: "" };
	const [imageAsFile, setImageAsFile] = useState("");
	const [imageAsUrl, setImageAsUrl] = useState(allInputs);
	const [input, setInput] = useState("");
	const user = useSelector((state) => state.user.user);
	const sendPost = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			name: user.displayName,
			desciption: user.email,
			message: input,
			imageUrl: imageAsUrl?.imgUrl || "",
			photoURL: user.photoURL || "",

			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
		onCloseModal();
		setImageAsUrl("");
		setClicked(false);
	};

	const handleImageAsFile = (e) => {
		const image = e.target.files[0];
		setImageAsFile(image);
	};

	const handleFireBaseUpload = (e) => {
		e.preventDefault();
		if (imageAsFile === "") {
			console.error(`not an image, the image file is a ${typeof imageAsFile}`);
		}
		const uploadTask = storage
			.ref(`/images/${imageAsFile.name}`)
			.put(imageAsFile);

		uploadTask.on(
			"state_changed",
			(snapShot) => {
				console.log(snapShot);
			},
			(err) => {
				switch (err.code) {
					case "storage/unauthorized":
						break;
					case "storage/canceled":
						break;
					case "storage/unknown":
						break;
				}
			},
			() => {
				storage
					.ref("images")
					.child(imageAsFile.name)
					.getDownloadURL()
					.then((fireBaseUrl) => {
						setImageAsUrl((prevObject) => ({
							...prevObject,
							imgUrl: fireBaseUrl,
						}));
					});
			}
		);
	};

	console.log("ffff", imageAsUrl.imgUrl);
	return (
		<div className="createImage">
			<Dialog className="createApost__modal" open={open}>
				<h2 className="createImage__title">Upload Image</h2>
				<form onSubmit={handleFireBaseUpload} className="createImage__form">
					<input
						type="text"
						className="createImage__input"
						onChange={(e) => setInput(e.target.value)}
						placeholder="What is on your mind?"
					/>

					<input
						type="file"
						size="60"
						className="createImage__fileButton"
						onChange={handleImageAsFile}
					/>
					<button
						className="createImage__button"
						onClick={() => setClicked(true)}
						type="submit"
						style={{ backgroundColor: clicked === true ? "#0074b1" : "white" }}
					></button>
					<p>Click the circle here after choose the image to upload</p>
				</form>
				<div className="createImage__buttons">
					<button
						className="createImage__cancelButton"
						onClick={() => {
							onCloseModal(!open);
							setClicked(false);
						}}
					>
						Cancel
					</button>
					<button
						className="createImage__postButton"
						button
						type="submit"
						onClick={sendPost}
					>
						Post
					</button>
				</div>
				{imageAsUrl?.imgUrl ? (
					<img
						className="createPost__imgShow"
						src={imageAsUrl.imgUrl}
						alt="image tag"
					/>
				) : null}
			</Dialog>
		</div>
	);
}

export default CreartePostWithImage;
