const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

// Giving dotenv Path of File
dotenv.config({ path: "./.env" });

// Creating Connection to DB
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Establishing Connection to DB
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected...");
  }
});

// Importing path of Public File
const publicDirectory = path.join(__dirname, "./public");

// Giving Express the Directory
app.use(express.static(publicDirectory));

// Setting View  Engine to use EJS
app.set("view engine", "ejs");

// Getting Homepage
app.get("/", (req, res) => {
  res.render("index");
});

// Getting About Us Page
app.get("/about-us", (req, res) => {
  res.render("about-us");
});

// Getting Login Page
app.get("/login", (req, res) => {
  res.render("login");
});

// Getting Registration Page
app.get("/register", (req, res) => {
  res.render("register");
});

// To Start Server
my_port = process.env.PORT || 5000;
app.listen(my_port, () => {
  console.log(`Server Started on Port ${my_port}`);
});
