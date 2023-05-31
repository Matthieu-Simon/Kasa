import jsonData from '../data/data.json';

export const Card = () => {
    const data = jsonData.map(item => ({
        id: item.id,
        title: item.title,
        cover: item.cover,
    }));

    return (
        <div className="main-container">
        {data.map((item, index) => (
            <div key={index} className="card-content">
                <img src={item.cover} alt={item.title} className="img-card" />
                <h3 className="title-card">{item.title}</h3>
            </div>
        ))}
        </div>
    )
}