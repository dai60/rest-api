import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes/apiRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
app.use(express.static("dist"));

const dbUri = "mongodb://127.0.0.1:27017/restapi";
const port = 3000;

mongoose.connect(dbUri)
    .then(() => {
        console.log(`connected to ${dbUri}`);
        app.listen(port, () => {
            console.log(`listening on http://localhost:${port}`);
        })
    })
    .catch(err => console.error(err));

app.use((req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
})

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.sendFile("./dist/index.html", { root: __dirname });
});
