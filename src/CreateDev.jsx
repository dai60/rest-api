import { useNavigate } from "react-router-dom";
import DevForm from "./components/DevForm";

const CreateDev = () => {
    const navigate = useNavigate();

    const handleCreate = (data) => {
        fetch("/api/devs/", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("error submitting form");
                }
                navigate("/");
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <h2>Prideti nauja programuotoja</h2>
            <div id="dev-container">
                <DevForm
                    handleSubmit={handleCreate}
                    submitValue="Prideti"
                />
            </div>
        </>
    );
}

export default CreateDev;
