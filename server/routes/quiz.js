import  express from "express";
import {getQuestions,createQuestion} from "../controllers/questions.js";
const router= express.Router();
router.get('/',getQuestions);
router.post('/',createQuestion);
export default router;