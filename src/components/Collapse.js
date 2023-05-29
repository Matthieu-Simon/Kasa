import flecheTop from '../medias/images/Fleche/VectorTop.png';
import flecheBottom from '../medias/images/Fleche/VectorBottom.png';

export const Collapse = () => {
    return (
        <div className="collapse">
            <button class="accordion">Fiabilité<img className="fleche" src={flecheBottom} alt="" /></button>
            <div class="panel">
                <p className="collapse-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
            <button class="accordion">Respect<img className="fleche" src={flecheTop} alt="" /></button>
            <div class="panel">
                <p className="collapse-text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            <button class="accordion">Service<img className="fleche" src={flecheBottom} alt="" /></button>
            <div class="panel">
                <p className="collapse-text">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <button class="accordion">Sécurité<img className="fleche" src={flecheBottom} alt="" /></button>
            <div class="panel">
                <p className="collapse-text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
    )   
};