import { Link } from "react-router-dom";

const DevList = ({ devs, handleDelete }) => {
    return (
        <ul>
            {devs.map(dev => (
                <li key={dev._id}>
                    <span className={dev.laisvas ? "free" : "busy"}></span>
                    <span className="name">{dev.vardas}</span>
                    <span className="rank">{dev.tech.join(", ")}</span>
                    <span className="dist">{Math.floor(dev.distance / 1000)} km</span>
                    <span className="delete icon" onClick={() => handleDelete(dev._id)}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z" clipRule="evenodd"></path></svg>
                    </span>
                    <span className="edit icon">
                        <Link to={`/edit/${dev._id}`}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
                        </Link>
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default DevList;
