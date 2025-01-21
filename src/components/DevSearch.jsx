import { useRef } from "react";

const DevSearch = ({ handleSearch }) => {
    const lng = useRef();
    const lat = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(lng.current.value, lat.current.value);
    }

    return (
        <form id="search" onSubmit={handleSubmit}>
            <label>Ilguma</label>
            <input type="number" ref={lng} placeholder="Ilguma" required />
            <label>Platuma</label>
            <input type="number" ref={lat} placeholder="Platuma" required />
            <input type="submit" value="Rasti programuotojus" />
        </form>
    );
}

export default DevSearch;
