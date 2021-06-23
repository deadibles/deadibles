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

// login a user
module.exports.login = async ( req, res ) => {
    // deconstruct the email and password from the body
    const { email, password } = req.body;
    // if they are empty send a msg to the user
    if ( !email || !password ) {
        res.status( 400 ).json( { msg: 'Please enter all fields' } );
    }
    // Look up email in the database
    User.findOne( { email } )
        .then( user => {
            // if there isn't a user with matching email send msg
            if ( !user ) res.status( 400 ).json( { msg: 'User does not exist' } );

            // Validate password
            // use bcrypt to compare the password and hashed password
            bcrypt.compare( password, user.password )
                .then( isMatch => {
                    // if password or email doesn't match return msg
                    if ( !isMatch ) return res.status( 400 ).json( { msg: 'Invalid credentials' } );

                    // sign the jwt like in register functon, return the token with the details of the user w/o the password
                    jwt.sign(
                        { id: user._id },
                        config.get( 'jwtsecret' ),
                        { expiresIn: 3600 },
                        ( err, token ) => {
                            if ( err ) throw err;
                            res.json( {
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            } );
                        }
                    )
            })
    })
}

// getting a user
module.exports.getUser = ( req, res ) => {
    // finds user by id then returns user without the password
    User.findById( req.user.id )
        .select( '-password' )
        .then( user => res.json( user ) );
}