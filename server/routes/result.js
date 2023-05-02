import express from 'express';
import { getResults,createResult } from '../controllers/results.js';
const router= express.Router();
router.get('/',getResults);
router.post('/',createResult);
export default router;