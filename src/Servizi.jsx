import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWrench, faBicycle, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Servizi.css';

function Servizi() {
  return (
    <div
      className="servizi-page"
      style={{
        backgroundImage: 'url("/sfondo2.webp")',
        width: '100vw',
      }}
    >
      <nav className="servizi-navbar">
        <div style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <img src="/logo11.png" alt="FM Montano Logo" style={{ height: '40px', marginRight: '10px' }} />
          EFFEBI
        </div>
        <ul className="servizi-navList">
          <li className="servizi-navItem">
            <Link to="/" className="servizi-navLink">HOME</Link>
          </li>
          <li className="servizi-navItem">
            <Link to="/contatti" className="servizi-navLink">CONTATTI</Link>
          </li>
        </ul>
      </nav>
      <div className="servizi-container">
        <div className="servizio-header-banner">
          <h1 className="servizi-h1">DI QUALE SERVIZIO HAI BISOGNO?</h1>
        </div>
        <div className="servizi-boxes-wrapper">
          <div className="servizi-boxes">
            <div className="servizio-box">
              <FontAwesomeIcon icon={faCar} size="2x" color="#D9534F"className="fa-icon" />
              <h2>INSTALLAZIONE DI GANCI TRAINO</h2>
              <p>Su autoveicoli, furgoni e camper.</p>
            </div>
            <div className="servizio-box">
              <FontAwesomeIcon icon={faWrench} size="2x" color="#D9534F"className="fa-icon" />
              <h2>CENTRO ASSISTENZA UFFICIALE</h2>
              <p>Di accessori per camper della Truma e Dometic.</p>
            </div>
            <div className="servizio-box">
              <FontAwesomeIcon icon={faWrench} size="2x" color="#D9534F"className="fa-icon" />
              <h2>RIPARAZIONE E VENDITA DI RIMORCHI</h2>
              <p>Per il trasporto di motocicli, autovetture, imbarcazioni e cassonati.</p>
            </div>
            <div className="servizio-box">
              <FontAwesomeIcon icon={faBicycle} size="2x" color="#D9534F"className="fa-icon" />
              <h2>VENDITA DI PORTABICICLETTE PER AUTO</h2>
              <p>Da gancio, da portellone e da tetto.</p>
            </div>
            <div className="servizio-box">
              <FontAwesomeIcon icon={faWrench} size="2x" color="#D9534F" className="fa-icon"/>
              <h2>VENDITA RICAMBI PER RIMORCHI E CARAVAN</h2>
              <p>Giunti di attacco, stabilizzatori, mover e ricambi masse frenanti.</p>
            </div>
            <div className="servizio-box">
              <FontAwesomeIcon icon={faClipboardCheck} size="2x" color="#D9534F" className="fa-icon"/>
              <h2>COLLAUDI E REVISIONI</h2>
              <p>Aggiornamento ganci traino e revisioni periodiche presso la motorizzazione.</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.facebook.com/profile.php?id=100055947356107" className="facebook-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://wa.me/+390106451117" className="social-icon whatsapp-icon" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}

export default Servizi;
