import express from 'express';
import { MemoriesModel } from './MemoriesModel.js';

const router = express.Router();

router.get('/', async(_, res) => {
    const response_data = await MemoriesModel.find({});
    return res.json({data: response_data, error: false});
});

router.post('/', async(req, res) => {
    const { InitiatorName, Photo } = req.body;
    const Data = new MemoriesModel({
        Initiator: InitiatorName,
        Photo
    });
    const _ = await Data.save();
    return res.json({success: true, error: false})
});

export default router;