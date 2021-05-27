import React from 'react';
import './App.css';

//Imports from the Login Page
import Nav from './components/Login/Nav'
import Jumbotron from './components/Login/Jumbotron'
import Login from './components/Login/Login'

//Imports from the Home Page
import Hnav from './components/Home/Hnav'
import Table from './components/Home/Table'
import Slides from './components/Home/Slides'

//Imports from the Card Creation Page
import Cnav from './components/Creation/Cnav'
import Creation from './components/Creation/Creation';

//Imports from the Review Page
import Rnav from './components/Review/Rnav'


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// function App() {
//   const adminUser = {
//     email: "admin@admin.com", 
//     password : "admin1234"
//   }

//   const [user, setUser] = useState({name:"", email:""});
//   const [error, setError ] = useState("");

//   const Login = details => {
//     console.log(details);
//   }

//   const Logout = () => {
//     console.log("Logout");
//   }

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      {/* Login Page goes Here */}
      <Route>
      <Nav />
      <Jumbotron />
      <Login />
      </Route>
      
      {/* Home Page goes Here */}
      <Route>
      <Hnav />
      <Table />
      <Slides />
      </Route>

      {/* Creation Page goes Here */}
      <Route>
      <Cnav />
      <Creation />
      </Route>
      
      {/* Review Page goes Here */}
      <Route>
      <Rnav/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}


export default App;
