import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
        </header>
        <footer className="footer text-center">
          Creato da: Giacomo Frola
        </footer>
      </div>
    </Router>
  );
}

export default App;
