import "./SlideShow.css";
import ArrowLeft from "./images/ArrowLeft.png";
import ArrowRight from "./images/ArrowRight.png";
import { useState } from "react";

export const SlideShow = ({ images }) => {
    let [pictures, setPictures] = useState(0);
    let listImg = images.length;

    const imgPrecedente = () => {
        if(pictures === 0) {
            setPictures(listImg - 1);
        } else {
            setPictures(pictures - 1);
        }
        return(setPictures);
    };  

    const imgSuivante = () => {
        if(pictures === listImg - 1) {
            setPictures(listImg = 0);
        } else {
            setPictures(pictures + 1);
        }
        return(setPictures);
    };

    return(
        <div className="carousel">
            <>
            {
                listImg > 1 && <img className="arrowSlide arrowSlideLeft" src={ArrowLeft} alt="Précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img 
                        key={index} 
                        className={index === pictures ? 'imgCarouselActive' : 'imgCarousel'} 
                        src={image} 
                        alt="Logement"/>
                    )
                })
            }
            {
                listImg > 1 && <img className="arrowSlide arrowSlideRight" src={ArrowRight} alt="Suivant" onClick={imgSuivante}/>
            }
            </>
            <p className='slideCount'>{pictures + 1} / {listImg}</p>
        </div>
    );

    

};

