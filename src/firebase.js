import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyBBq1S33ZtdPyRiepp24hJtz9FxWNhjvA8",
	authDomain: "linkedin-c-942cf.firebaseapp.com",
	projectId: "linkedin-c-942cf",
	storageBucket: "linkedin-c-942cf.appspot.com",
	messagingSenderId: "856754026664",
	appId: "1:856754026664:web:03c208f51e2120dfbf2a9d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
