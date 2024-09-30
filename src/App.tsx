import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='./list'>List</Link>
      </nav>
    </div>
  );
};

export default App;