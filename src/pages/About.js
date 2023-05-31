// import { Banner } from "../components/Banner";
import { Collapse } from "../components/Collapse";
import ImageAPropos from '../medias/images/Banner/Photo-Montagne.png';

export const About = () => {
    return (
        <div className="main-content">
            {/* Importer Banner à la place d'image */}
            <div className="banner-content-about">
                <img src={ImageAPropos} className="img-banner-about" alt="Paysage Montagne" />
            </div>
            <div className="collapse-menu">
                <Collapse />
            </div>
        </div>
    )
};