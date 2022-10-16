import express from "express";
const router  = express.Router();
import StudetController from "../controllers/studentsController.js"

router.get('/session_example',StudetController.session_example);
router.get('/get_session_data',StudetController.get_session_data);

export default router;