import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { signOut } from "./actions/index";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";

function Header() {
	const history = useHistory();
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(signOut());
		auth.signOut();
		history.push("/");
	};

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://res.cloudinary.com/maivw/image/upload/v1611949586/LinkedIn_Logo_2013.svg_2_qoqphu.png"
					alt="logo"
					onClick={() => history.push("/")}
				/>
				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption
					Icon={HomeIcon}
					title="Home"
					onClick={() => history.push("/")}
				/>
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network " />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Chat" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption avatar="true" title="Me" onClick={logOut} />
			</div>
		</div>
	);
}

export default Header;

//https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png
