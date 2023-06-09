import { useParams, Navigate } from "react-router-dom";
import "./Logement.css";
import jsonData from "../../data/data.json";
import { SlideShow } from "../../components/SlideShow/SlideShow";
import { InfosLogement } from "../../components/InfosLogement/InfosLogement";
import { Tags } from "../../components/Tags/Tags";
import { Ratings } from "../../components/Ratings/Ratings";
import { Profile } from "../../components/PhotoUser/PhotoUser";
import { Dropdown } from "../../components/Dropdown/Dropdown";

export const Logement = () => {
  const id = useParams();
  const filesLogement = jsonData.find((logement) => logement.id === id.id);

  if (!filesLogement) {
    return <Navigate to="/Error" />
  }

  return (
        <div className="fiche-description">
            <SlideShow images={filesLogement.pictures} />
                
                <main className="main-content-logement">
                    <div>
                        <InfosLogement />
                        <div className="tags-content">
                        {filesLogement.tags.map((tags, index) => (
                            <Tags key={index} tag={tags} />
                        ))}
                        </div>
                    </div>
                    
                    <div className="profile">
                        <Ratings />
                        <Profile
                            hostName={filesLogement.host.name}
                            picture={filesLogement.host.picture}
                        />
                    </div>
                </main>
                

                <div className="description-content">
                {filesLogement.description && (
                    <div className="collapse-logement">
                        <Dropdown title="Description" content={filesLogement.description} />
                    </div>
                )}
                {filesLogement.equipments && (
                    <div className="collapse-logement">
                        <Dropdown title="Equipements" content={filesLogement.equipments} />
                    </div>
                )}
                </div>
        </div>
  );
};
