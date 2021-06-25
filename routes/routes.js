// import other routes
const configRoutes = require('./config.js');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the davys development config server - it doesnt do much now fuck off');
    });

    // other routes
    configRoutes(app, fs);

};

module.exports = appRouter;