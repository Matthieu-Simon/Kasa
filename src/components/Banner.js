import ImageAccueil from '../medias/images/Banner/Photo-Accueil.jpg';
// import ImageAPropos from '../medias/images/Photo-APropos.jpg';


export const Banner = () => {
    return (
        // A modifier pour changer de photo et retirer le H2 quand on switch sur la page About
        <div className="banner-content">
            <img src={ImageAccueil} alt="Paysage Mer" className="img-banner" />
            <h2 className="title-banner">Chez vous, partout et ailleurs</h2>
        </div>
    )
};
