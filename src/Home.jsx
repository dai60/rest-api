import { useState } from "react";
import DevSearch from "./components/DevSearch";
import DevList from "./components/DevList";

const Home = () => {
    const [devs, setDevs] = useState([]);

    const handleSearch = (lng, lat) => {
        fetch(`/api/devs/?lng=${lng}&lat=${lat}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(devs => setDevs(devs))
            .catch(err => console.error("Error during fetch:", err));
    }

    const handleDelete = (id) => {
        if (!window.confirm("Delete?")) {
            return;
        }

        fetch(`/api/devs/${id}`, { method: "DELETE" })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                setDevs(devs => devs.filter(dev => dev._id !== id));
            })
            .catch(err => console.error("Error during fetch:", err));
    }

    return (
        <>
            <h2>Surask programuotoją šalia savęs!</h2>
            <div id="dev-container">
                <DevSearch handleSearch={handleSearch}/>
                <DevList devs={devs} handleDelete={handleDelete}/>
            </div>
        </>
    );
}

export default Home;
