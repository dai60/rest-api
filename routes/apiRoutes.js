import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();

router.get("/devs", controller.devs_get);
router.post("/devs", controller.devs_post);
router.put("/devs/:id", controller.devs_put);
router.delete("/devs/:id", controller.devs_delete);

export default router;
