import './About.css';
import aboutData from '../../data/textAbout.json';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Banner } from '../../components/Banner/Banner';

export const About = () => {
    const data = aboutData.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
    }));


    return (
        <main className="about-content">
            <Banner />
            <div className="collapse-desktop">
            {data.map((content) => (
                <Dropdown key={content.id} content={content} />
            ))}
            </div>
        </main>
    )
};