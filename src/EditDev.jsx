import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DevForm from "./components/DevForm";

export const editLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch("/api/devs");
    if (!res.ok) {
        throw new Error("network error");
    }

    const devs = await res.json();
    const dev = devs.find(dev => dev._id === id);

    if (!dev) {
        throw new Error("not found");
    }
    return {
        vardas: dev.vardas,
        tech: dev.tech.join(", "),
        lng: dev.location.coordinates[0],
        lat: dev.location.coordinates[1],
        free: dev.laisvas,
    }
}

const EditDev = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dev = useLoaderData();

    const handleEdit = (data) => {
        fetch(`/api/devs/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: "PUT",
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
            <h2>Redaguoti programuotoja</h2>
            <div id="dev-container">
                <DevForm
                    handleSubmit={handleEdit}
                    defaultValues={dev}
                    submitValue="Redaguoti"
                />
            </div>
        </>
    );
}

export default EditDev;
