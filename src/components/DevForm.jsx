const DevForm = ({ handleSubmit, defaultValues, submitValue }) => {
    return (
        <form className="dev-form" onSubmit={e => {
            e.preventDefault();
            handleSubmit({
                vardas: e.target.vardas.value,
                tech: e.target.tech.value,
                lng: e.target.lng.value,
                lat: e.target.lat.value,
                free: e.target.free.checked,
            });
        }}>
            <label htmlFor="vardas">Vardas</label>
            <input type="text" name="vardas" id="vardas" placeholder="Vardas Pavarde" defaultValue={defaultValues?.vardas} required />
            <label htmlFor="tech">Technologijos</label>
            <input type="text" name="tech" id="tech" placeholder="pvz. Node.js, React" defaultValue={defaultValues?.tech} required />
            <label htmlFor="lng">Ilguma</label>
            <input type="number" name="lng" id="lng" step="any" placeholder="Ilguma" defaultValue={defaultValues?.lng} required />
            <label htmlFor="lat">Platuma</label>
            <input type="number" name="lat" id="lat" step="any" placeholder="Platuma" defaultValue={defaultValues?.lat} required />
            <div className="checkbox">
                <input type="checkbox" name="free" id="free" defaultChecked={defaultValues?.free ?? true} />
                <label htmlFor="free">Laisvas?</label>
            </div>
            <input type="submit" value={submitValue} />
        </form>
    );
}

export default DevForm;
