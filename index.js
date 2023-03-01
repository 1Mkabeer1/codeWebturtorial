const { hasSubscribers } = require('diagnostics_channel');
const express = require('express');
const { param } = require('express/lib/request');
const path = require('path');
const app = express()
const redditData = require('./data.json');
const port = 4000;

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req,res) => {
    res.render(`home`)
});
app.get('/r/:subreddit',(req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    // console.log(data);
    // console.log(subParam)
    res.render('subreddit',{ subreddit, ...data })
})
app.get("*",(req,res) => {
    res.render('noPage')
});



app.listen(port, () => console.log(`listening on port: ${port}`));