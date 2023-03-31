import logo from './logo.svg';
import './App.css';
import { Home } from './frontend/home.jsx';
import RouterComponent from './frontend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterComponent />
      </header>
    </div>
  );
}

export default App;
