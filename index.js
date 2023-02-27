const express = require('express');
const { path } = require('express/lib/application');
const { param } = require('express/lib/request');
// const path = require(path);
const app = express()
const port = 4000;
app.set("view engine", "ejs");
app.set("views", path.join("__dirname", "/views"));

/*
 #first expirament under expressjs turtorial 
  discuss about routing, parameter and query string.

app.get('/',(req, res) => {
    res.send('<h1>Hello, My first server</h1>')
    console.log('Hello, This is my first server');
});

app.get("/:parameter", (req, res) => {
    const {parameter} = req.params;
    const {q} = req.query;
    console.log(req.params);
    console.log(req.query);
    res.send(`<h1>Your Browsing under ${parameter} parameter searching for ${q} Query.</h1>`);
});

app.post("/", (req,res) => {
    res.send("Posted successful!")
});
*/

app.get("/", (req,res) => {
    res.render("home")
})
app.get("*",(req,res) => {
    res.send("Path not available")
});



app.listen(port, () => console.log(`listening on port: ${port}`));