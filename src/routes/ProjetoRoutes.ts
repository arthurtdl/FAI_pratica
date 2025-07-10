import { Router } from "express";
import ProjetoController from "src/controllers/ProjetoController";

const router = Router();

router.post("/", ProjetoController.create);

export default router