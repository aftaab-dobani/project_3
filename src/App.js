import logo from './logo.svg';
import './App.css';
import Nav from './components/HOME PAGE/Nav'
import Jumbotron from './components/HOME PAGE/Jumbotron'
import Login from './components/HOME PAGE/Login'


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
      <Nav />
      <Jumbotron />
      <Login />
    </div>
  );
}


export default App;
