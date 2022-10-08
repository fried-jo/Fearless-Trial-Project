const express = require('express');
//Now a stretch feature to be used with JSON object store
// const fileController = require('../controllers/fileController.js');
const itemController = require('../controllers/itemController.js');

const router = express.Router();

//MVP
router.get('/', (req, res) => {
    return res.status(200);
})
router.post('/', (req, res) => {
    return res.status(201);
})
router.delete('/', (req, res) => {
    return res.status(200);
})

//stretch
router.get('/id', (req, res) => {
    return res.send(200);
})
router.patch('/id', (req, res) => {
    return res.send(200);
})
router.delete('/id', (req, res) => {
    return res.send(200);
})

module.exports = router;