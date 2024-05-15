import express from 'express';
import { sendResevation } from "../controller/resevation.js"

const router = express.Router();

router.post('/send', sendResevation );


export default router;