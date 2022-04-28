import express from "express";
import { dummy } from "../controllers/index.js";

const router = express.Router();

router.get("/route", dummy.dummyController);

export default router;
