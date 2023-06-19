import { useParams } from "react-router-dom";
import './Logement.css';
import jsonData from '../../data/data.json';
import { SlideShow } from "../../components/SlideShow/SlideShow";
import { InfosLogement } from "../../components/InfosLogement/InfosLogement";
import { Tags } from "../../components/Tags/Tags";
import { Ratings } from "../../components/Ratings/Ratings";
import { Profile } from "../../components/PhotoUser/PhotoUser";


export const Logement = () => {
    const id = useParams();
    const filesLogement = jsonData.find(logement => logement.id === id.id);


    return(
        <>
            <div className="fiche-description">
                <SlideShow images={filesLogement.pictures}/>
                <InfosLogement />
                <div className="tags-content">
                { filesLogement.tags.map((tags, index) => (
                    
                        <Tags key={index} tag={tags} />
    
                    )) 
                }
                </div>
                <div className="profile">
                    <Ratings />
                    <Profile 
                        hostName={filesLogement.host.name} 
                        picture={filesLogement.host.picture}
                    />
                </div>
                
            </div>
        </>
    )
};