import { Router } from "express";
import DesenvolvedorController from "src/controllers/DesenvolvedorController";

const router = Router();

router.post("/", DesenvolvedorController.create);

export default router