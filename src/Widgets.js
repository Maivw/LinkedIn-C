import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
	const newArticles = (heading, subTitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon style={{ fontSize: "12px" }} />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subTitle}</p>
			</div>
		</div>
	);
	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2> LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newArticles("React", "React is awesome")}
			{newArticles("Tech workers push for unions", "Updated 1 day ago")}
			{newArticles("Here's who's hiring right now", "React is awesome")}
			{newArticles("Remote co-living is now a thing", "React is awesome")}
			{newArticles("Amazon is headed to Beantown", "React is awesome")}
		</div>
	);
}

export default Widgets;
