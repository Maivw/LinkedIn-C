import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "./actions/index";
import Widgets from "./Widgets";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./User";
import Home from "./Home";

function App() {
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					signIn({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.displayName,
						photoURL: userAuth.photoURL,
					})
				);
			} else {
				dispatch(signOut());
			}
		});
	}, []);

	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/users/:uid" component={User} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
