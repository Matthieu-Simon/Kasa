import { Link } from "react-router-dom";
import './Footer.css';
import logoFooter from './images/LogoFooter.png';

export const Footer = () => {
  return (
    <footer className="footer-content">

        <Link to="/" className="footer-title"><span>K</span><img src={logoFooter} alt="Logo Kasa" className="kasa-logo-footer" /><span>sa</span></Link>


        <h4 className="text-footer">© 2020 Kasa. All rights reserved</h4>

    </footer>
  )
}
