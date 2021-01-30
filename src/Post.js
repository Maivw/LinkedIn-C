import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

const Post = forwardRef(
	({ name, description, message, photoURL, imageUrl, videoUrl }, ref) => {
		// const user = useSelector((state) => state.user.user);
		const [selectedUser, setSelectedUser] = useState({});

		return (
			<div ref={ref} className="post">
				<div className="post__header">
					<Avatar src={photoURL}>{name[0]}</Avatar>

					<div className="post__info">
						<h2> {name}</h2>
						<p className="post__description">{description}</p>
					</div>
				</div>
				<div className="post__body">
					<p>{message}</p>
					<div className="post__imageWrapper">
						{imageUrl ? (
							<img src={imageUrl} alt="image" className="post__imgShowed" />
						) : null}
					</div>
					<div className="post__videoWrapper">
						{videoUrl ? (
							<video width="320" height="240" controls>
								<source src={videoUrl} type="video/mp4"></source>
							</video>
						) : null}
					</div>
				</div>
				<div className="post__button">
					<InputOption
						Icon={ThumbUpAltOutlinedIcon}
						title="Like"
						color="gray"
					/>
					<InputOption
						Icon={CommentOutlinedIcon}
						title="Comment"
						color="gray "
					/>
					<InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
					<InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
				</div>
			</div>
		);
	}
);

export default Post;
