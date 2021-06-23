// get required libraries and files
const { Router } = require( 'express' );
const cartController = require( '../controllers/cartController' );
const router = Router();
// routes
router.get( '/cart/:id', cartController.getCartItems );
router.post( '/cart/:id', cartController.addCartItem );
router.delete( '/cart/:userId/:itemId', cartController.deleteCartItem );

module.exports = router;