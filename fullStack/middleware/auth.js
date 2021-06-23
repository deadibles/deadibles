// get libraries
const config = require( 'config' );
const jwt = require( 'jsonwebtoken' );

function auth( req, res, next ) {
    //get the token from the header
    const token = req.header( 'x-auth-token' );

    // check for token, if no token send msg
    if ( !token ) {
        return res.status( 401 ).json( { msg: 'No token, authorization denied' } );
    }

    try {
        // verify token
        const decoded = jwt.verify( token, config.get( 'jwtsecret' ) );
        // add user from payload, send the decoded variable as the response
        req.user = decoded;
        // next allows us to move onto the next function
        next();
    } catch ( e ) {
        res.status( 400 ).json( { msg: 'Token is not valid' } );
    }

}

module.exports = auth; 