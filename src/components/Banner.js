import ImageAccueil from '../medias/images/Photo-Accueil.jpg';

export const Banner = () => {
    return (
        <div className="banner-content">
            <img src={ImageAccueil} alt="Paysage Montagne" className="img-banner" />
            <h2 className="title-banner">Chez vous, partout et ailleurs</h2>
        </div>
    )
};