import React, { useState } from "react";
import "./CreateEvent.css";

function CreateEvent() {
	const [eventName, setEventName] = useState("");
	const [web, setWeb] = useState("");
	const timeZones = [];
	return (
		<div className="createEvent">
			<Dialog className="createApost__modal" open={open}>
				<h2 className="createPost__title">Create a Post</h2>
				<DialogContent>
					<label>Event Name</label>
					<input
						className="createPost__input"
						type="text"
						value={eventName}
						onChange={(e) => setEventName(e.target.value)}
					/>
					<label>Webinar Link</label>
					<input
						className="createPost__input"
						type="text"
						value={web}
						onChange={(e) => setWeb(e.target.value)}
					/>
				</DialogContent>
			</Dialog>
			<div className="createEvent__top">
				<img
					src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
					alt="Create a note image"
				/>
				<div className="createEvent__topInner">
					<Avatar
						style={{ width: "150px", height: "150px" }}
						src={user?.photoURL}
					>
						{"LinkedIn"}
					</Avatar>

					<h2>{user?.displayName}</h2>
					<h4>{user?.email}</h4>
				</div>
			</div>
		</div>
	);
}

export default CreateEvent;
