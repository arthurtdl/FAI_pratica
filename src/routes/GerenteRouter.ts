import { Router } from "express";
import GerenteController from "src/controllers/GerenteController";

const router = Router();

router.post("/", GerenteController.create);

export default router