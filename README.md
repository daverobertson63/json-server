# Node JSON Config Server
Simple JSON config service that allows simple configs to be accessed via REST


## Using the API server
Implmented as a simple http://host:port/config/:id idea where the namne of the config file is stored as config.id.json and tehn served based on that.


### Getting started

npm install
```
And that's really about it (see, I said it was simple!). To fire up the server and have it do stuff, you'll need to start it with the familiar command:

```
npm start
```

### Accessing the server and returning data

The server should be running by now, and you can visit `http://localhost:3001/config` to see it in action. 

## Expanding the server

1. Add a new config JSON file with your relevant data to the main data entry point for the project, `./data`
2. Add a route file that will access this data into `./routes/[your route file].js` -- hint: use the `./routes/users.js` as a starting point
3. Add your new route file into the main routes file located at `./routes/routes.js`






