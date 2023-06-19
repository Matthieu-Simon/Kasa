import "./InfosLogement.css";
import { useParams } from "react-router-dom";
import jsonData from '../../data/data.json';

export const InfosLogement = () => {
    const id = useParams();
    const filesLogement = jsonData.find(logement => logement.id === id.id);

    return (
        <div className="information-logement">
                <span className="title-logement">{filesLogement.title}</span>
                <span className="location-logement">{filesLogement.location}</span>
        </div>
    )
};