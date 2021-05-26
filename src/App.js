import logo from './logo.svg';
import './App.css';
import Nav from './components/HOME PAGE/Nav'
import Jumbotron from './components/HOME PAGE/Jumbotron'
import Login from './components/HOME PAGE/Login'

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
