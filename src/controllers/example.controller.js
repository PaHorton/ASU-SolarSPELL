import {
    Router
} from 'express';
const router = Router();

export default class {
    constructor({
        app,
        datalayer
    }) {
        this.datalayer = datalayer;
        this.router = router;

        router.get('/', (req, res, next) => this.doStuff(req, res, next));
        router.post('/', (req, res, next) => this.doOtherStuff(req, res, next));
    }

    /**
     * Both of the below are valid.
     * One uses .then and .catch
     * The other uses await
     * 
     * These are called PROMISES
     * It is the better way to do async stuff in javascript
     * Google them to learn more.
     * (They help you avoid callback hell)
     */

    async doStuff(req, res, next) {
        // this.datalayer.findThings().then(result => {
        //     res.send(result);
        // }).catch(error => {
        //     res.send("Oh no!")
        // });

        res.send("Example");
    }

    async doOtherStuff(req, res, next) {
        // try {
        //     const result = await this.datalayer.findThngs();
        //     res.send(result);
        // } catch (error) {
        //     res.send("Oh no!");
        // }

        res.send("Example");
    }
};