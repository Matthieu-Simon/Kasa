import './Homepage.css';
import jsonData from '../../data/data.json';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';

export const Home = () => {

    return (
        <main className="homepage-content">
            <Banner />
            <section className="main-container">
                {jsonData.map((house) => (
                    <div key={house.id}>
                        <Card  house={house} />
                    </div>
                ))}
            </section>
        </main>
    )
};
