import './App.css';
import Nav from './components/Login/Nav'
import Jumbotron from './components/Login/Jumbotron'
import Login from './components/Login/Login'


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
    <div className="App">
      <Nav />
      <Jumbotron />
      <Login />
    </div>
  );
}


export default App;
