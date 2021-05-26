import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react'

function App() {
  const adminUser = {
    email: "admin@admin.com", 
    password : "admin1234"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError ] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="App">
    Hello 
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}


export default App;
