import './PhotoUser.css';

export const Profile = ({ hostName, picture}) => {

    return (
        <div className="information-user">
                <span className="name-user">{hostName}</span>
                <img className="picture-user"
                 src={picture} 
                 alt="Propriétaire"
                />
        </div>
    )
}