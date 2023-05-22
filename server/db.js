const { MongoClient } = require('mongodb');

// const URL = 'mongodb://localhost:27017/skateboardbox'; 
const URL = 'mongodb://0.0.0.0:27017/skateboardbox'; 
// const URL = 'mongodb://host.docker.internal:27017/skateboardbox'; 

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient
        .connect(URL)
        .then((client) => {
            console.log('Connected to MongoDB');
            dbConnection = client.db();
            return cb();
        })
        .catch((err) => {
            return cb(err);
        })
    },
    getDb: () => dbConnection,
};