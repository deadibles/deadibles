// add the models
const User = require( '../models/Users' );
// add the required libraries
const jwt = require( 'jsonwebtoken' );
const config = require( 'config' );
const bcrypt = require( 'bcrypt' );

// register a new user
module.exports.register = ( req, res ) => {
    // deconstruct the name, email, and password from the request body
    const { name, email, password } = req.body;
    //check if fields are empty
    if ( !name || !email || !password ) {
        res.status( 400 ).json( { msg: 'Please enter all fields' } );
    }
    // search for an email
    User.findOne( { email } )
        .then( user => {
            if ( user ) return res.status( 400 ).json( { msg: 'User already exists' } );
            // create a new user instance
            const newUser = new User( { name, email, password } );
            // generate a salt and hash the password using that salt
            bcrypt.genSalt( 10, ( err, salt ) => {
                if ( err ) throw err;
                newUser.password = hash;
                // save the newuser instance in the database
                newUser.save()
                    .then( user => {
                        // create a signed jwt token to be stored in local storage
                        // create the token with the user id and the jwt secret with the expire time then sends the toke as a response along with the user details without the password
                        jwt.sign(
                            { id: user._id },
                            config.get( 'jwtsecret' ),
                            { expiresIn: 3600 },
                            ( err, token ) => {
                                if ( err ) throw err;
                                res.json( {
                                    token, user: {
                                        id: user._id,
                                        name: user.name,
                                        email: user.email
                                    }
                                } );
                            }
                        )
                    })
            })
        } )
}