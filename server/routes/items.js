const express = require('express');
//Now a stretch feature to be used with JSON object store
// const fileController = require('../controllers/fileController.js');
const itemController = require('../controllers/itemController.js');

const router = express.Router();

//MVP
router.get('/', itemController.getItems, (req, res) => {
    return res.status(200).send(res.locals.items);
});
router.post('/', itemController.createItem, (req, res) => {
    return res.status(201).send(res.locals.newItem);
});
router.delete('/', itemController.deleteItems, (req, res) => {
    return res.status(200).send('You succesfully deleted all the items.');
});

//stretch
router.get('/id', (req, res) => {
    return res.send(200);
});
router.patch('/id', (req, res) => {
    return res.send(200);
});
router.delete('/id', (req, res) => {
    return res.send(200);
});

module.exports = router;