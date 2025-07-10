import { Router } from "express";
import SquadController from "src/controllers/SquadController";

const router = Router();

router.post("/", SquadController.create);

export default router