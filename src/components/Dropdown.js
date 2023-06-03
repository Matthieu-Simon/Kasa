// import flecheTop from '../medias/images/Fleche/VectorTop.png';


import React, { useState } from 'react';
import './Dropdown.css';
import flecheBottom from '../medias/images/Fleche/VectorBottom.png';

export const Dropdown = ({ content }) => {
    const [show, setShow] = useState(false);
    

    return (
        <div className="collapse">

            <button className="accordion" onClick={() => setShow(!show)}>
                {content.title}
                <img className="fleche" src={flecheBottom} alt={content.title} />
            </button>

            { show ?
            <div className="panel">
                <p className="collapse-text">{content.description}</p>
            </div>
            : null}
            
        </div>
    )   
};
