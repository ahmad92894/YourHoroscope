import logo from './logo.svg';
import NavBar from './componets/NavBar';
import Footer from './componets/Footer';
import './App.css';
import Aquarius from './pages/Aquarius';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route path="/Login" element={<login />} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>,

    <div1>
      <NavBar />
      <Aquarius />
      <Footer/>
   
    
    </div1>
  );
}

export default App;
