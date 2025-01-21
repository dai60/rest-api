import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import CreateDev from "./CreateDev";
import EditDev, { editLoader } from "./EditDev";
import _404 from "./404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <_404 />,
        children: [
            { index: true, element: <Home /> },
            { path: "/create", element: <CreateDev /> },
            { path: "/edit/:id", element: <EditDev />, loader: editLoader },
        ],
    },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}
