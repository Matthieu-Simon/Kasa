import './Homepage.css';
import jsonData from '../../data/data.json';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';

export const Home = () => {
    const data = jsonData.map(item => ({
        id: item.id,
        title: item.title,
        cover: item.cover,
    }));

    return (
        <main className="homepage-content">
            <Banner />
            <main className="main-container">
            {data.map((house) => (
                <>
                    <Card key={house.id} house={house} />
                </>
            ))}
            </main>
        </main>
    )
};
