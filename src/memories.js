const { Router } = require('express');
const MemoriesModel = require('./MemoriesModel.js');
const app = require('./server.js');
const serverless = require('serverless-http');
const router = Router();

router.get('/', async(req, res) => {
    console.log('got the request');
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

app.use("/.netlify/functions/memories", router);

module.exports.handler = serverless(app);