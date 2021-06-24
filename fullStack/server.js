// Import the libraries needed
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const path = require( 'path' );
const config = require( 'config' );
//Call our express and use it in the application
const app = express();
app.use( express.json() );
// setup static react files :) 
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
    app.get( '*', ( req, res ) => {
        res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
    })
}
// Connect to the DB
const dbURI = config.get( 'dbURI' );
const port = process.env.PORT || 4000;
mongoose.connect( dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } )
    .then( ( result ) => app.listen( port ) )
    .catch( ( err ) => console.log( err ) );



    