// import { Link } from "react-router-dom";
import logo from '../medias/images/Logo/LogoFooter.png';
import porte from '../medias/images/Logo/PorteFooter.png';

export const Footer = () => {
  return (
    <div className="footer">
        <h2  className="footer-title">K<img src={logo} alt="" className="kasa-logo-footer" /><img className="porte-logo-footer" src={porte} alt="" />sa</h2>
        <p className="text-footer">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
