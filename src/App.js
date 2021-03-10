import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         HEllo THERE1345
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
    </div>
  );
}

export default App;

// docker run -p 8000:3000 -v /app/node_modules -v C:\Users\Danny\PycharmProjects\prod\frontend:/app -e CHOKIDAR_USEPOLLING=true volumetest1
