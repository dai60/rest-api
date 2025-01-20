import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes/apiRoutes.js";
import Dev from "./models/Dev.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

const dbUri = "mongodb://127.0.0.1:27017/restapi";
mongoose.connect(dbUri)
    .then(result => app.listen(3000))
    .catch(err => console.error(err));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/create", (req, res) => {
    res.render("create-dev");
});

app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    Dev.findById(id)
        .then(dev => res.render("edit-dev", { dev }))
        .catch(err => {
            console.error(err);
            res.status(404).render("404");
        });
});

app.use((req, res) => {
    res.status(404).render("404");
})
