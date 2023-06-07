import './Error.css';
import { Link } from 'react-router-dom';

export const Error = () => {

    return (
        <main className="error-content">
            <div className="error-header">
                <h2 className="error-title">404</h2>
                <p className="error-text">
                    Oups! La page que vous demandez n'existe pas.
                </p>
            </div>
            <Link to="/" className="link-decoration">
                Retourner sur la page d'accueil
            </Link>
        </main>
    )
}