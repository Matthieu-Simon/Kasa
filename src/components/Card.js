import React, { useState, useEffect } from 'react';

export const Card = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('/kasa/src/data/data.json')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données JSON :', error);
        });
    }, []);

    return (
        <div className="location-content">
        {data.map((location) => (
            <div key={location.id} className="">
                <img src={location.cover} alt={location.title} className="img-location" />
                <h3 className="title-location">{location.title}</h3>
            </div> 
        ))}
        </div>
    ) 
}