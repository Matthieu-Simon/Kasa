import { Link } from "react-router-dom";
import './Header.css';
import logo from '../medias/images/Logo/LogoHeader.png';
import porte from '../medias/images/Logo/PorteLogoHeader.png';

export const Header = () => {
    return (
        <div className="header-content">

        
            <Link to="/" className="header-title"><span>K</span><img src={logo} alt="" className="kasa-logo" /><img className="porte-logo" src={porte} alt="" /><span>sa</span></Link>


            <div className="navigation">
                <Link to="/" className="link-nav">Accueil</Link>
                <Link to="/about" className="link-nav">A Propos</Link>
            </div>


        </div>
    )
}