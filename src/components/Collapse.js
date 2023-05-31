import React, { useState } from 'react';
import './Collapse.css';
import flecheTop from '../medias/images/Fleche/VectorTop.png';
import flecheBottom from '../medias/images/Fleche/VectorBottom.png';

export const Collapse = () => {
    const [show, setShow] = useState(false);


    return (
        <div className="collapse-content">
            <div className="collapse">
                <button className="accordion" onClick={() => setShow(!show)}>Fiabilité<img className="fleche" src={flecheBottom} alt="" /></button>
                { show ? 
                    <div className="panel">
                    <p className="collapse-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div> : null}
            </div>
        </div>
    )   
};