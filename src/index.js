import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./components/features/name";
import emailReducer from "./components/features/email";
import ageReducer from "./components/features/age";
import totalReducer from "./components/features/total";
import isLoginReducer from "./components/features/isLogin";

const store = configureStore({
  reducer: {
    name: nameReducer,
    email: emailReducer,
    age: ageReducer,
    total: totalReducer,
    isLogin: isLoginReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
