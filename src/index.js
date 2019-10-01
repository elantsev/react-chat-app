import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";

// import firebase from "firebase/app";
// import "firebase/firestore";
import LoginComponent from "./login/login";
import DashboardComponent from "./dashboard/dashboard";
import SignUpComponent from "./signup/signup";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCq5ixzoAao6zVdSBng2HX39BNe3LVxE_E",
  authDomain: "react-chat-app-a4a53.firebaseapp.com",
  databaseURL: "https://react-chat-app-a4a53.firebaseio.com",
  projectId: "react-chat-app-a4a53",
  storageBucket: "react-chat-app-a4a53.appspot.com",
  messagingSenderId: "193367371875",
  appId: "1:193367371875:web:9e032f78c5f915f98e4856",
  measurementId: "G-1JRESP6RPV"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
      <Route path="/signup" component={SignUpComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
