const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;

//To parse form data in POST request body:
app.use(bodyParser.urlencoded({extended: true }));

// // Views folder and EJS setup:
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));


// // Our fake database:
let comments = [
    {
        id: 1,
        username: 'Mohammed',
        comment: 'lol that is so funny!'
    },
    {
        id: 2,
        username: 'Kabir',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: 3,
        username: 'Amina',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: 4,
        username: 'Fatima',
        comment: 'woof woof woof'
    }
];

app.get("/", (req, res) => {
    res.send("<h1> Hello Comments</h1>")
})
// Displaying all comment
app.get('/comments', (req, res) => {
    res.render('comments/comments', { comments })
})


app.listen(port,() => {
    console.log(`listening on port: ${port}`);
})