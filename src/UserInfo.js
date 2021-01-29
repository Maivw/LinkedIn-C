import React, { useState } from "react";
import "./UserInfo.css";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import firebase from "firebase";
function UserInfo() {
	const [open, setOpen] = useState(false);

	let user = firebase.auth().currentUser;
	let name, email, photoUrl, uid, emailVerified;

	if (user != null) {
		name = user.displayName;
		email = user.email;
		photoUrl = user.photoURL;
		emailVerified = user.emailVerified;
		uid = user.uid;
	}

	console.log("use", user);

	const renderInfo = (Icon, des) => (
		<div className="info__details">
			{Icon} <span className="infor__detail">{des}</span>
		</div>
	);

	return (
		<div className="userInfo">
			<div className="userInfo__top">
				<img
					src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
					alt=""
				/>
				<div className="userInfo__topInner">
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
			<div className="userInfo__bottom">
				<div className="userInfo__bottom-header" onClick={() => setOpen(true)}>
					Contact infor
				</div>
				<Dialog
					className="userInfo__modal"
					open={open}
					onClose={() => setOpen(false)}
				>
					<h2 className="userInfo__modal-name">{user?.displayName}</h2>
					<div className="userInfo__modal-subTitle">
						Contact infor{" "}
						<span>
							<EditOutlinedIcon style={{ color: "#0074b1" }} />
						</span>
					</div>
					{renderInfo(<AccountCircleOutlinedIcon />, user?.displayName)}
					{renderInfo(<MailOutlineIcon />, user?.email)}
					<DialogActions>
						<button
							className="userInfo__modal-button"
							onClick={() => setOpen(false)}
						>
							<CloseIcon />
						</button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}

export default UserInfo;
