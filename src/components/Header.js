import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title">Kasa</h1>
            <div className="navigation">
                <Link to="/" className="link-nav">Accueil</Link>
                <Link to="/about" className="link-nav">A Propos</Link>
            </div>
        </div>
    )
}