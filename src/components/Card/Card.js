import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({ house }) => {
    
    return (
        <>
            <Link to={'/logement/' + house.id} className="link-card">

                <img src={house.cover} alt={house.title} className="img-card" />
                <h3 className="title-card">{house.title}</h3>
        
            </Link>
    
        </>
    )
}