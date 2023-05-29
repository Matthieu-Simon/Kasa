import { Link } from "react-router-dom";
import logo from '../medias/images/Logo/LogoHeader.png';
import porte from '../medias/images/Logo/PorteLogoHeader.png';

export const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">K<img src={logo} alt="" className="kasa-logo" /><img className="porte-logo" src={porte} alt="" />sa</h1>
            <div className="navigation">
                <Link to="/" className="link-nav">Accueil</Link>
                <Link to="/about" className="link-nav">A Propos</Link>
            </div>
        </div>
    )
}