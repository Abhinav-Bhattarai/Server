import express from 'express';
import { LetterModel } from './LetterModel.js';

const router = express.Router();

router.get('/', async(_, res) => {
    const response_data = await LetterModel.find({});
    return res.json({ data: response_data })
})

export default router;