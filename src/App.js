import logo from './logo.svg';
import Comp1 from './Comp1';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> this is Mandeep and this is second branch. I am learning git. this is crazy. i am applying for jobs
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Comp1 />
      </header>
    </div>
  );
}

export default App;
