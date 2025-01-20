import Dev from "../models/Dev.js";

function parseFormData(body) {
    const vardas = body.vardas;
    const tech = body.tech
        .split(",")
        .map(tech => tech.trim())
        .filter(tech => tech !== "");

    const laisvas = body.free;

    const lng = parseFloat(body.lng);
    const lat = parseFloat(body.lat);

    if (isNaN(lng) || isNaN(lat)) {
        return undefined;
    }

    return {
        vardas,
        tech,
        laisvas,
        location: {
            type: "Point",
            coordinates: [lng, lat],
        },
    };
}

export const devs_get = (req, res) => {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);

    if (!isNaN(lng) && !isNaN(lat)) {
        Dev.aggregate([
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [lng, lat],
                    },
                    distanceField: "distance",
                    spherical: true,
                    maxDistance: 100000,
                }
            }
        ])
            .then(devs => {
                res.send(devs);
            })
            .catch(err => {
                console.error(err);
                res.status(500).send(err.message);
            });
    }
    else {
        Dev.find()
            .then(devs => {
                res.send(devs);
            })
            .catch(err => {
                console.error(err);
                res.status(500).send(err.message);
            });
    }
}

export const devs_post = (req, res) => {
    const dev = parseFormData(req.body);
    if (!dev) {
        res.status(400).send("invalid form data");
        return;
    }

    Dev.create(dev)
        .then(_ => res.status(200).send("dev created"))
        .catch(err => {
            console.error(err);
            res.status(500).send("internal server error");
        });
}

export const devs_put = (req, res) => {
    const id = req.params.id;
    const dev = parseFormData(req.body);
    if (!dev) {
        res.status(400).send("invalid form data");
        return;
    }

    Dev.findByIdAndUpdate(id, dev)
        .then(_ => res.status(200).send("dev updated"))
        .catch(err => {
            console.error(err);
            res.status(500).send("internal server error");
        });
}

export const devs_delete = (req, res) => {
    const id = req.params.id;

    Dev.findByIdAndDelete(id)
        .then(_ => res.status(200).send("dev deleted"))
        .catch(err => {
            console.error(err);
            res.status(500).send("internal server error");
        });
}
