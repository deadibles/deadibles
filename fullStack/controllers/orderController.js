const Order = require( '../models/Order' );
const Cart = require( '../models/Cart' );
const User = require( '../models/Users' );
const config = require( 'config' );
const stripe = require( 'stripe' )( config.get( 'StripeAPIKey' ) );

// get orders, find by user id and sort  descending order by date ordered
module.exports.getOrders = async ( req, res ) => {
    const userId = req.params.id;
    Order.find( { userId } ).sort( { date: -1 } ).then( orders =>
        res.json( orders )
     );
}
// get the user id and the source from the req andfind cart and user  then we create a charge through stripe we say if it's successful or not if so send email and bill  and delete the card after order is done
module.exports.checkout = async ( req, res ) => {
    try {
        const userId = req.params.id;
        const { source } = req.body;
        let cart = await Cart.findOne( { userId } );
        let user = await User.findOne( { _id: userId } );
        const email = user.email;
        if ( cart ) {
            const charge = await stripe.charges.create( {
                amount: cart.bill,
                currency: 'inr',
                source: source,
                receipt_email: email
            } )
            if ( !charge ) throw Error( 'Payment failed' );
            if ( charge ) {
                const order = await Order.create( {
                    userId,
                    items: cart.items,
                    bill: cart.bill
                } );
                const data = await Cart.findByIdAndDelete( { _id: cart.id } );
                return res.status( 201 ).send( order );
            }
        } else {
            res.satuse( 500 ).send( "You do not have items in your cart" );
        }
    } catch ( err ) {
        console.log( err );
        res.status( 500 ).send( "Something went wrong" );
    }
}