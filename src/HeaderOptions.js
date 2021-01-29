import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function HeaderOption({ title, Icon, avatar, onClick }) {
	const user = useSelector((state) => state.user.user);
	return (
		<div className="headerOption" onClick={onClick}>
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && (
				<Avatar
					className="headerOption__icon"
					src={user?.photoURL}
					style={{ height: "25px", width: "25px" }}
				>
					{user?.displayName[0]}
				</Avatar>
			)}
			<h3 className="headerOption__title ">{title}</h3>
		</div>
	);
}

export default HeaderOption;
