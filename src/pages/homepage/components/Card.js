import './Card.css';

export const Card = ({ house }) => {
    return (
        <div className="card-content">
            <img src={house.cover} alt={house.title} className="img-card" />
            <h3 className="title-card">{house.title}</h3>
        </div>
    )
}