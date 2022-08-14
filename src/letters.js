const { Router } = require('express');
const LetterModel = require('./LetterModel.js');
const app = require('./server.js');
const serverless = require('serverless-http');

const router = Router();

router.get('/', async(_, res) => {
    const response_data = await LetterModel.find({});
    return res.json({ data: response_data })
})

router.post('/', async(req, res) => {
    const { First, Second, Third, User } = req.body;
    const data = new LetterModel({ First, Second, Third, User });
    const _ = await data.save();
    return res.json({saved: true, error: false});
})

// api endpoints
app.use("/.netlify/functions/letters", router);
module.exports.handler = serverless(app);