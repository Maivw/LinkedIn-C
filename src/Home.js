import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useSelector } from "react-redux";

function Home() {
	const user = useSelector((state) => state.user.user);
	return (
		<div>
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Feed />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default Home;
