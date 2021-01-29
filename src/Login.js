import React, { useState, useEffect } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { signIn, signUp } from "./actions/index";

function Login() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [password, setPassword] = useState("password");
	const [email, setEmail] = useState("maitranvw@gmail.com");
	const [photoUrl, setPhotoUrl] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					signIn({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoURL: userAuth.user.photoURL,
					})
				);
			})
			.catch((err) => alert(err));
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (!name) {
			return alert("Please enter your name");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: photoUrl,
					})
					.then(() => {
						dispatch(
							signIn({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: photoUrl,
							})
						);
					});
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div className="login">
			<img
				src="https://res.cloudinary.com/maivw/image/upload/v1611949389/LinkedIn_Logo_2013.svg_2_dcyauc.png"
				alt="logo"
			/>
			<form>
				<input
					type="text"
					placeholder="Full name (required if registering)"
					value={name}
					onChange={(e) => setName(e.target.value)}
					autoComplete="off"
				/>
				<input
					type="text"
					placeholder="Profile picture URL (optional)"
					value={photoUrl}
					onChange={(e) => setPhotoUrl(e.target.value)}
					autoComplete="off"
				/>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					autoComplete="off"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="off"
				/>
				<button className="login__button" type="submit" onClick={handleLogin}>
					Sign In
				</button>
			</form>
			<p>
				Not a member?
				<span className="login__register" onClick={handleRegister}>
					Register now
				</span>
			</p>
		</div>
	);
}

export default Login;
