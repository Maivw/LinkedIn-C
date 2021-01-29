import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import configureStore from "./reducers";
import { PersistGate } from "redux-persist/integration/react";

export const store = configureStore();
let persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
