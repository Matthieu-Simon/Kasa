import './About.css';
import aboutData from '../data/textAbout.json';
import { Dropdown } from "../components/Dropdown";
import { Banner } from "../components/Banner";

export const About = () => {
    const data = aboutData.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
    }));


    return (
        <div className="about-content">
            <Banner />
            <div className="collapse-content">
            {data.map((content) => (
                <Dropdown key={content.id} content={content} />
            ))}
            </div>
        </div>
    )
};