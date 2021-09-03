const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

const app = express();

// Giving dotenv Path of File
dotenv.config({ path: './.env'});

// Creating Connection to DB
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Establishing Connection to DB
db.connect( (error) => {
    if(error) {
        console.log(error)
    }
    else {
        console.log("Database Connected...")
    }
});

app.get("/",(req, res) => {
    res.send("Hello")
});

app.listen(5000, () => {
    console.log("Server Started on Port 5000")
});
