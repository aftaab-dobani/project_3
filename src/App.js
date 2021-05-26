import logo from './logo.svg';
import './App.css';
import Nav from './components/Login/Nav'
import Jumbotron from './components/Login/Jumbotron'
import Login from './components/Login/Login'

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
