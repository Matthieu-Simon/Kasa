import { useLocation } from "react-router-dom";
import './Banner.css';
import ImageAccueil from '../medias/images/Banner/Photo-Accueil.jpg';
import ImageABout from '../medias/images/Banner/Photo-Montagne.png';


export const Banner = () => {
    const location = useLocation();

    return (
        <div className="banner-content">
        {location.pathname === '/' ? (
            <div>
                <img className="img-banner-accueil" src={ImageAccueil} alt="Paysage Falaise" />
                <p className="title-banner">Chez vous, partout et ailleurs</p>
            </div>
          
        ) : (
            <img className="img-banner-about" src={ImageABout} alt="Paysage Montagne" />
        )}
      </div>
        
    )
};


