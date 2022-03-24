import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Navbar from './components/Nabvar'
import ShoppingCart from './components/ShoppingCart';
import ProductItem from './components/ProductItem';
import { shoppingReducer } from './reducers/shoppingReducer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
      <ShoppingCart/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
