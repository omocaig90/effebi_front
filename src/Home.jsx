import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

function Home() {
    return (
        <div
            className="page"
            style={{
                backgroundImage: 'url("/sfondo2.webp")',
                width: '100vw',
            }}
        >
            <nav className="navbar">
                <div style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <img src="/logo11.png" alt="FM Montano Logo" style={{ height: '40px', marginRight: '10px' }} />
                    EFFEBI
                </div>
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/servizi" className="navLink">SERVIZI</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/contatti" className="navLink">CONTATTI</Link>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <div className="header-banner">
                    <div className="header-text">
                        <h1>FATTI TRAINARE DA NOI</h1>
                        <p>Da oltre 30 anni garantiamo il meglio</p>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box">
                        <h2>RIMORCHI</h2>
                        <p>Un rimorchio è un mezzo versatile e pratico, ideale per portare sempre con sé le proprie passioni, aumentare la capacità di carico di un’autovettura o semplicemente facilitare operazioni quotidiane come la rimozione dell’erba appena tagliata dal proprio giardino.</p>
                    </div>
                    <div className="box">
                        <h2>PORTATUTTO E BAGAGLIERE</h2>
                        <p>Tutto inizia con un portatutto Thule. Scegli i sistemi di fissaggio e le barre più adatte, quindi aggiungi le varie opzioni. Inserisci i dettagli della tua auto e ti mostreremo quel che fa per te. Una bagagliera Thule è la soluzione ideale quando hai bisogno di spazio in più.</p>
                    </div>
                    <div className="box">
                        <h2>PORTABICI</h2>
                        <p>Con un portabici, puoi portare le tue biciclette ovunque tu voglia, in modo veloce, facile e sicuro.</p>
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

export default Home;
