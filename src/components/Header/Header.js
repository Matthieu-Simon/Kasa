import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logoHeader from './images/LogoHeader.png';

export const Header = () => {
    const location = useLocation();

    return (
        <header className="header-content">

        
            <Link to="/" className="header-title"><span>K</span><img src={logoHeader} alt="Logo Kasa" className="kasa-logo-header" /><span>sa</span></Link>


            <nav className="navigation">
                <Link to="/" className={location.pathname === '/' ? 'link-nav:active accueil' : 'link-nav accueil'}>Accueil</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'link-nav:active' : 'link-nav'}>A Propos</Link>
            </nav>


        </header>
    )
}