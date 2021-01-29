import React from "react";
import Widgets from "./Widgets";
import UserInfo from "./UserInfo";
import Header from "./Header";

function User() {
	return (
		<div className="userPage">
			<Header />
			<div
				className="userPage__body"
				style={{ display: "flex", flexDirection: "row" }}
			>
				<UserInfo />
				<Widgets />
			</div>
		</div>
	);
}

export default User;
