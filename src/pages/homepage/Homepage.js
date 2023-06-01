import './Homepage.css';
import jsonData from '../../data/data.json';
import { Banner } from "../../components/Banner";
import { Card } from "./components/Card";

export const Home = () => {
    const data = jsonData.map(item => ({
        id: item.id,
        title: item.title,
        cover: item.cover,
}));

    return (
        <div className="homepage-content">
            <Banner />
            <div className="main-container">
            {data.map((house) => (
                <Card key={house.id} house={house} />
            ))}
            </div>
        </div>
    )
};