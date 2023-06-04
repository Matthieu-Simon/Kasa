import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({ house }) => {
    return (
        <div className="card-content">
            <Link to={`/logement/${house.id}`} className="link-card">
                <img src={house.cover} alt={house.title} className="img-card" />
                <p className="title-card">{house.title}</p>
            </Link>
        </div>
    )
}