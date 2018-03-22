/**
 * Node module imports
 */
import express from 'express';

/**
 * Initialize App with globals
 */
let app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Solar spell");
});

/**
 * Setup routing
 */
// helpers.routing(app);

app.use((err, req, res, next) => {
    console.log(err);

    res.status(500).send(err);
})

/**
 * Start HTTP Server
 */
var port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log("Server listening on port ", port);
});