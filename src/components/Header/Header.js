import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logoHeader from './images/LogoHeader.png';

export const Header = () => {
    const location = useLocation();

    return (
        <header className="header-content">

        
            <Link to="/" className={`header-title ${location.pathname === '/' ? 'active' : ''}`}><span>K</span><img src={logoHeader} alt="Logo Kasa" className="kasa-logo-header" /><span>sa</span></Link>


            <nav className="navigation">
                <Link to="/" className={`link-nav ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                <Link to="/about" className={`link-nav ${location.pathname === '/about' ? 'active' : ''}`}>A Propos</Link>
            </nav>


        </header>
    )
}