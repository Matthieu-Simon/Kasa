import './ErrorPage.css';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className="error-content">
            <div className="error-header">
                <h1 className="error-title">404</h1>
                <p className="error-text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link to="/" className="link-decoration">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}