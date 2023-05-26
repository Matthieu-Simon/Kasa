import ImageAccueil from '../medias/images/Photo-Accueil.jpg';

export const Banner = () => {
    return (
        <div className="img-home-content">
            <img src={ImageAccueil} alt="Paysage Montagne" className="img-home" />
            <h2 className="title-home">Chez vous, partout et ailleurs</h2>
        </div>
    )
};