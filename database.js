//import express module
const express = require('express');
const cors = require('cors')
const mysql = require('mysql');

//creates an object of type express. This represents our application.
const app = express();
app.use(cors());

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'airbnb'
});

//connect to the db
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("DB Connected.....");
});

//different methods available corresponds to different http verbs/methods
app.get('/', (req, res) => {
    res.send("Data fetched");

});
//get list of products
app.get('/api/products', (req, res) => {

    // call query method to get data/query results from db
    db.query('select * from host', (err, results) => {
        if (err) {
            throw err;
        }
        else {
            console.log(results);
        }
        res.send(results);
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
