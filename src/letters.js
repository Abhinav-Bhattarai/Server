const { Router } = require('express');
const LetterModel = require('./LetterModel.js');
const app = require('./server.js');
const serverless = require('serverless-http');
const express = require('express');

const router = Router();
router.use(express.json());
router.get('/', async(_, res) => {
    const response_data = await LetterModel.find({});
    return res.json({ data: response_data })
})

router.post('/', async(req, res) => {
    const { First, Second, Third, User } = req.body;
    console.log(First, Second, Third, User)
    const data = new LetterModel({ Username: User, First, Second, Third, });
    const _ = await data.save();
    return res.json({saved: true, error: false});
})

// api endpoints
app.use("/.netlify/functions/letters", router);
module.exports.handler = serverless(app);