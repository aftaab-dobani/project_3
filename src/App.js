import './App.css';
import {BrowserRouter} as Router, /route, switch} from 'React-Router-Dom';
import Nav from './components/Login/Nav'
import Jumbotron from './components/Login/Jumbotron'
import Login from './components/Login/Login'
import Creation from './components/Creation/Creation';
import Homepage from './components/Home/Homepage'
import Table from './components/Home/Table'
import Slides from './components/Home/Slides'
import { Route, Router } from 'react-router';
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

      <Route>
      <Nav />
      <Jumbotron />
      <Login />
      </Route>
      
      <Route>
      <Homepage />
      <Table />
      <Slides />
      </Route>

      <Route>
      <Creation />
      </Route>
      
      </Switch>
    </div>
    </Router>
  );
}


export default App;
