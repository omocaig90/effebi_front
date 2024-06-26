import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Servizi from './Servizi';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
          </Routes>
        </header>
        <footer className="footer">
          WEBSITE CREATED BY: GIACOMO FROLA & STEFANIA FALCHI
        </footer>
      </div>
    </Router>
  );
}

export default App;
