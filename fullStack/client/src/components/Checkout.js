import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABILE =
    'pk_test_51J5cScLCP0E7tEINvQxOjV2R5WdzHe42q0WS0yj8fwZSIl2eF4P0puEFo9uaPG3hK312GFVIAiS8gUUdnt5lCJXn00K8nnkDYC';
  
const onToken = ( user, checkout ) => ( token ) => checkout( user, token.id );

const Checkout = ( { amount, user, checkout } ) => <StripeCheckout amount={amount * 100} token={onToken( user, checkout )} currency="INR" stripeKey={STRIPE_PUBLISHABILE} />

export default Checkout;