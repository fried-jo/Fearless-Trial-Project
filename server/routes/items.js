const express = require('express');
//Now a stretch feature to be used with JSON object store
// const fileController = require('../controllers/fileController.js');
const itemController = require('../controllers/itemController.js');

const router = express.Router();
//Stretch
router.get('/id', itemController.getItemByID, (req, res) => {
    //If item is found in database, send it, otherwise inform the user.
    return res.status(200).send(res.locals.foundItem ? res.locals.item : 'No item found, try another ID!');
});

router.patch('/id', itemController.getItemByID, 
    itemController.updateItem, (req, res) => {
    return res.status(200).send(res.locals.foundItem ? res.locals.item : 'No item found, try another ID!');
});

router.delete('/id', itemController.getItemByID, 
    itemController.deleteItem, (req, res) => {
    return res.status(200).send(res.locals.foundItem ? 'Item deleted' : 'No item found, try another ID!');
});

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


module.exports = router;