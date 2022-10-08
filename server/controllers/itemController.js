const mockDatabase = [];

const itemController = {};

let globalIdCounter = 1;

//MVP

itemController.createItem = (req, res, next) => {
    // console.log(req.query)
    const { newName }  = req.query;
    res.locals.newItem = {
        //assigns the ID, then post-increments the global ID counter
        id: globalIdCounter++,
        name: newName
    };
    mockDatabase.push(res.locals.newItem);
    console.log('Database updated: ', mockDatabase);
    return next();
}

itemController.getItems = (req, res, next) => {
    return next();
}

itemController.deleteItems = (req, res, next) => {
    return next();
}


//Stretch
itemController.getItemByID = (req, res, next) => {

    return next();
}

itemController.updateItem = (req, res, next) => {

    return next()
}

itemController.deleteItem = (req, res, next) => {

    return next();
}

module.exports = itemController;