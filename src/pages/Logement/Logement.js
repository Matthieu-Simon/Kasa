import { useParams } from "react-router-dom";
import './Logement.css';
import jsonData from '../../data/data.json';
import { SlideShow } from "../../components/SlideShow/SlideShow";


export const Logement = () => {
    const id = useParams();
    const filesLogement = jsonData.find(logement => logement.id === id.id);

    return(
        <>
            <div className="FicheDescription">
                <SlideShow images={filesLogement.pictures}/>
            </div>
        </>
    )
};