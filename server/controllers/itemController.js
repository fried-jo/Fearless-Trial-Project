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
    res.locals.items = mockDatabase;
    return next();
}

itemController.deleteItems = (req, res, next) => {
    mockDatabase.length = 0;
    return next();
}


//Stretch
itemController.getItemByID = (req, res, next) => {
    console.log(req.query);
    res.locals.foundItem = false;
    const target = parseInt(req.query.id)
    //Iterate through mock database, finding the item and it's corresponding index
    mockDatabase.forEach( ( item, index ) => {
        if(item.id === target){
            //Store relevant data in res.locals to be passed along middlware chain
            res.locals.item = item;
            res.locals.index = index;
            res.locals.foundItem = true;
        }
    })
    return next();
}

itemController.updateItem = (req, res, next) => {
    //If no item was found, return
    if(!res.locals.foundItem) return next();
    const { newName } = req.query;
    //Destructure the updated name from query string, and reassign the correct item's name in the database
    mockDatabase[res.locals.index].name = newName;
    res.locals.item = mockDatabase[res.locals.index];
    return next()
}

itemController.deleteItem = (req, res, next) => {
    //If no item was found, return
    if(!res.locals.foundItem) return next();
    //Delete the item from the database
    mockDatabase.splice(res.locals.index, 1);
    return next();
}

module.exports = itemController;