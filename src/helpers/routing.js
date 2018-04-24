import controllers from '../controllers';

export default ({
    app,
    datalayer
}) => {
    app.use('/content', new controllers.ContentController({
        app,
        datalayer
    }).router);
    // app.use('/util', new controllers.UtilityController({
    //     app,
    //     datalayer
    // }).router);
};
