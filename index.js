const express = require('express');
const { param } = require('express/lib/request');
const path = require('path');
const app = express()
const port = 4000;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req,res) => {
    res.render(`home`)
})
app.get("*",(req,res) => {
    res.send("Path not available")
});



app.listen(port, () => console.log(`listening on port: ${port}`));