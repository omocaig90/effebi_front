import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Servizi.css';

function Contatti() {
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
            <Link to="/servizi" className="servizi-navLink">SERVIZI</Link>
          </li>
        </ul>
      </nav>
      <div className="servizi-container">
        <div className="servizio-header-banner">
          <h1 className="servizi-h1">CONTATTACI</h1>
        </div>
        <div className="contatti-info">
          <div className="contatto-box">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#4d0808" className="fa-icon" />
            <h2>Email</h2>
            <p><a href="mailto:info@effebi.com" className="contatto-link">info@effebi.com</a></p>
          </div>
          <div className="contatto-box">
            <FontAwesomeIcon icon={faPhone} size="2x" color="#4d0808" className="fa-icon" />
            <h2>Telefono</h2>
            <p><a href="tel:+390106451117" className="contatto-link">+39 010 6451117</a></p>
          </div>
          <div className="contatto-box">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#4d0808" className="fa-icon" />
            <h2>Indirizzo</h2>
            <p><a href="https://maps.google.com/?q=Via San Pier D'Arena 9, 16149 Genova" target="_blank" rel="noopener noreferrer" className="contatto-link">Via San Pier D'Arena 9, Genova</a></p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.946704556949!2d8.894803815498197!3d44.41828387910217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d338dbbb1a1437%3A0x40a8a1099ff2233b!2sVia%20Sampierdarena%2C%209%2C%2016149%20Genova%20GE%2C%20Italy!5e0!3m2!1sen!2sus!4v1629224476970!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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

export default Contatti;
