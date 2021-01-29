import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	const user = useSelector((state) => state.user.user);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
					alt=""
				/>
				<Link to={`/users/${user?.uid}`} style={{ textDecoration: "none" }}>
					<Avatar className="sidebar__avatar" src={user?.photoURL}>
						{"LinkedIn"}
					</Avatar>
					<h2 className="sidebar__topName">{user?.displayName}</h2>
				</Link>
				<h4 className="sidebar__topEmail"> {user?.email}</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who view you</p>
					<p className="sidebar__staNumber">2.3000</p>
				</div>
				<div className="sidebar__stat">
					<p>View on post</p>
					<p className="sidebar__staNumber">2.9000</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactJs")}
				{recentItem("programming")}
				{recentItem("desgin")}
				{recentItem("developer")}
				{recentItem("software engineer")}
			</div>
		</div>
	);
}

export default Sidebar;
