import './Tags.css';
import '../../data/data.json';

export const Tags = ({ house }) => {

    return (
        <div className="tag-content">
            <button className="tag">{house.tags}</button>
        </div>
    )
};