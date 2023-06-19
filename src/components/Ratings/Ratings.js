import './Ratings.css';
import { useParams } from "react-router-dom";
import FullStar from './images/RedStar.png';
import StarEmpty from './images/GreyStar.png';
import jsonData from "../../data/data.json";

export const Ratings = () => {
    const id = useParams();
    const ficheLogement = jsonData.find(logement => logement.id === id.id);

    let ratingLogement = [];
        let fullStar = true;
        for (let index = 0; index < 5; index++) {
            if(index === parseInt(ficheLogement.rating)) {
                fullStar = false;
            }
            if(fullStar === true) {
                ratingLogement.push(<img key={index} className="star" src={FullStar} alt={`${ficheLogement.rating}/5`}/>)
            } else {
                ratingLogement.push(<img key={index} className="star" src={StarEmpty} alt={`${ficheLogement.rating}/5`}/>)
            }
        }

    return (
        <div className="ratings">
            {ratingLogement}
        </div>
    )
};