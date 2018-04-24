/**
 * Node module imports
 */
import express from 'express';
import helpers from './helpers';
import Datalayer from './Datalayer';
import path from 'path';

/**
 * Initialize App with globals
 */
var cors = require('cors')

let app = express();
app.use(cors({origin: '*'}))
/**
 * Instantiate Datalayer
 */
const datalayer = new Datalayer();


/**
 * Setup routing
 */
app.use(express.static(path.join(__dirname, 'public')));
helpers.routing({
    app,
    datalayer
});

/**
 * Setup error handlers
 */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
})

/**
 * Start HTTP Server
 */
var port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log("Server listening on port ", port);
});
