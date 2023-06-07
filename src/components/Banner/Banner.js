import { useLocation } from "react-router-dom";
import './Banner.css';
import ImageAccueil from './images/Photo-Accueil.jpg';
import ImageABout from './images/Photo-Montagne.png';


export const Banner = () => {
    const location = useLocation();

    return (
        <header className="banner-content">
        {location.pathname === '/' ? (
                <>
                    <img className="img-banner-accueil" src={ImageAccueil} alt="Paysage Falaise" />
                        <h2 className="title-banner">
                            Chez vous, partout et ailleurs
                        </h2>
                    
                </> 
        ) : (
            <img className="img-banner-about" src={ImageABout} alt="Paysage Montagne" />
        )}
      </header>
        
    )
};


