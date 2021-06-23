// get the model from the db
const Item = require( '../models/Item' );

// get items from the database and sort them in decreasing order from date added
module.exports.getItems = ( req, res ) => {
    Item.find().sort( { date: -1 } ).then( items => res.json( items ) );
}

//get the input for the  new item , save the item to the database and send the response to the user
module.exports.postItem = ( req, res ) => {
    const newItem = new Item( req.body );
    newItem.save().then( item => res.json( item ) );
}


//receive updated info thru the req body and the id through the params use the findbyidnadupdate to find item and update it with new info
module.exports.updateItem = ( req, res ) => {
    Item.findByIdAndUpdate( { _id: req.params.id }, req.body ).then( function ( item ) {
        Item.findOne( { _id: req.params.id } ).then( function ( item ) {
            res.json( item );
        } );
    } );
}

// get the item id then find the item and delete it and return success 
module.exports.deleteItem = ( req, res ) => {
    Item.findByIdAndDelete( { _id: req.params.id } ).then( function ( item ) {
        res.json( { success: true } );
    } );
}