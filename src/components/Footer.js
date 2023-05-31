import { Link } from "react-router-dom";
import './Footer.css';
import logo from '../medias/images/Logo/LogoFooter.png';
import porte from '../medias/images/Logo/PorteFooter.png';


export const Footer = () => {
  return (
    <div className="footer-content">


        <Link to="/" className="footer-title"><span>K</span><img src={logo} alt="" className="kasa-logo-footer" /><img className="porte-logo-footer" src={porte} alt="" /><span>sa</span></Link>


        <p className="text-footer">© 2020 Kasa. All rights reserved</p>

        
    </div>
  )
}
