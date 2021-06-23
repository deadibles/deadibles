// get libraries & files
const { Router } = require( 'express' );
const orderController = require( '../controllers/orderController' );
const router = Router();
// routes
router.get( '/order/:id', orderController.getOrders );
router.post( '/order/:id', orderController.checkout );

module.exports = router;