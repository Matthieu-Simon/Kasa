import { useState } from 'react';
import './Dropdown.css';
import arrow from './images/Vector.png';

export const Dropdown = ({ title, content }) => {
    const [show, setShow] = useState(false);
    
    return (
        
        <div className="collapse-content">
            <button className="accordion" onClick={() => setShow(!show)}>
                {content.title}
                <img className={show ? 'arrow arrow_down' : 'arrow arrow_up'} src={arrow} alt={content.title} />
            </button>

            { show && (
            <div className="panel">
                <p className="collapse-text">{content.description}</p>
            </div>
            )} */
            
        </div>

        
    )   
};


        
