import controllers from '../controllers';

export default ({
    app,
    datalayer
}) => {
    app.use('/example', new controllers.ExampleController({
        app,
        datalayer
    }).router);
};