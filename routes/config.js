
const configRoutes = (app, fs) => {

    // variables
    const dataPath = './data/config.json';
    const configBase = './data/config.';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;

            }

            callback();
        });
    };



    // READ specfic config file by ID
    app.get('/config/:id', (req, res) => {

        const configId = req.params["id"];

        var configFile = configBase + configId + ".json";

        console.log(configFile, configFile)
        fs.readFile(configFile, 'utf8', (err, data) => {
            if (err) {
                //throw err;
                res.send(err);
            } else {
                res.send(JSON.parse(data));
            }
        });
    });


    // READ main
    app.get('/config', (req, res) => {

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/config', (req, res) => {

        readFile(data => {
            // Note: this isn't ideal for production use. 
            // ideally, use something like a UUID or other GUID for a unique ID value
            const newUserId = Date.now().toString();

            // add the new user
            data[newUserId.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new user added');
            });
        },
            true);
    });


    // UPDATE
    app.put('/config/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];

            data[userId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/config/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];
            delete data[userId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} removed`);
            });
        },
            true);
    });
};

module.exports = configRoutes;
