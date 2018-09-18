// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const config = require('./db');
const PORT = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({"Message" : "Welcome to this MutliVendorApp Backend Side."});
});

mongoose.Promise = global.Promise;

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

require('./routes/user.routes.js')(app);

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});