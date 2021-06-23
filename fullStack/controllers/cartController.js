// get models
const Cart = require( '../models/Cart' );
const Item = require( '../models/Item' );


// get items
module.exports.getCartItems = async ( req, res ) => {
    // getthe users cart for who we want to access
    const userId = req.params.id;
    try {
        // find cart based on id
        let cart = await Cart.findOne( { userId } );
        // send cart
        if ( cart && cat.items.length > 0 ) {
            res.send( cart );
        }
        // send nothing if there is nothing
        else {
            res.send( null );
        }
    } catch ( err ) {
        console.log( err );
        //error something went wrong
        res.status( 500 ).send( "Something went wrong" );
    }

}

// add items to cart
module.exports.addCartItems = async ( req, res ) => {
    // get user
    const userId = req.params.id;
    // get item info
    const { produtId, quantity } = req.body;
    try {
        // find the cart and item
        let cart = await Cart.findOne( { userId } );
        let item = await Item.findOne( { _id: produtId } );
        // send error is no item foind
        if ( !item ) {
            res.status( 404 ).send( 'Item not found' );
        }
        const price = item.price;
        const name = item.title;
        if ( cart ) {
            // if cart exists for the user
            let itemIndex = cart.items.findIndex( p => p.productId == productId );
            // check if product exists or not
            if ( itemIndex > -1 ) {
                let productItem = cart.items[ itemIndex ];
                productItem.quantity += quantity;
                cart.items[ itemIndex ] = productItem;
            }
            else {
                cart.items.push( { productId, name, quantity, price } );
            }
            cart.bill += quantity * price;
            cart = await cart.save();
            return res.status( 201 ).send( cart );
        }
        else {
            // no cart exists create one
            const newCart = await Cart.create( {
                userId,
                items: [ { productId, name, quantity, price } ],
                bill: quantity * price
            } );
            return res.status( 201 ).send( newCart );
        }
    } catch ( err ) {
        console.log( err );
        res.status( 500 ).send( 'Something went wrong' );
    }
}

// delete item
module.exports.deleteItem = async ( req, res ) => {
    // get user and product info
    const userId = req.params.userId;
    const productId = req.params.itemId;
    try {
        // find cart
        let cart = await Cart.findOne( { userId } );
        //get items
        let itemIndex = cart.items.findIndex( p => p.productId == productId );
        if ( itemIndex > -1 ) {
            let productItem = cart.items[ itemIndex ];
            cart.bill -= productItem.quantity * productItem.price;
            cart.items.splice( itemIndex, 1 );
        }
        cart = await cart.save();
        return res.status( 201 ).send( cart );
    } catch ( err ) {
        console.log( err );
        res.status( 500 ).send( "Something went wrong" );
    }
}