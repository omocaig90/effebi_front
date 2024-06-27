import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Servizi from './Servizi';
import Contatti from './Contatti';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </header>
        <footer className="footer">
          <span className="partita-iva">P.IVA: 02952300990</span>
          <span className="created-by">WEBSITE CREATED BY: GIACOMO FROLA & STEFANIA FALCHI</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;
