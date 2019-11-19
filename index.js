// Configuration part
// ------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3231

// Create express app
const app = express();
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});



// Set up default mongoose connection
let db_url = 'mongodb://127.0.0.1/db_spotme';
mongoose.connect(db_url, { useNewUrlParser: true });
// Get the default connection
var db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




// Import Models
const Account = require('./models/account.model');

//1. For registration to add new account
app.post('/accounts/:name/:username/:address/:email/:password/:usertype', (req, res) => {
    let accountToAdd = new Account({
        name: req.params.name,
        username: req.params.username,
        address: req.params.address,
        email: req.params.email,
        password: req.params.password,
        userType: req.params.usertype
    });

    accountToAdd.save((err, account) => {
        if (err) {
            res.send(err);
        }
        console.log("Successfully Added!");
        res.json(account);
    })

})

//2. Get/view all accounts
app.get('/accounts', (req, res) => {
    Account.find({}, (err, accounts) => {
        if (err) {
            res.send(err);
        }
        res.json({ accounts: accounts });
    })

})


// listen for requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});