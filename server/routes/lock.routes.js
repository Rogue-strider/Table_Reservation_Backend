import express from "express"
import { lockTable, tabelStatus, unlockTable } from "../controllers/table.controller.js";

const router = express.Router();

router.route("/tables/lock").post(lockTable);
router.route("/tables/unlock").post(unlockTable);
router.route("/tables/:tableId/status").get(tabelStatus);


export default router;