const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport')
const bodyParser = require('body-parser')
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const User = require('./models/user.model');

// Connect to database
mongoose.connect('mongodb://localhost:27017/sampledb')
    .then(() => { console.log('Connected to the database successfully.'); })
    .catch((err) => { console.log(err); })

app.use(require("express-session")({
    secret: "mysecretkey",//decode or encode session
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.use(bodyParser.urlencoded(
    { extended: true }
))
app.use(passport.initialize());
app.use(passport.session());



// Configuring View (Template) Engine
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/userprofile', (req, res) => {
    res.render('userprofile');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', passport.authenticate("local", {
    successRedirect: "/userprofile",
    failureRedirect: "/login"
}), (req, res) => {
    console.log('LoggedIn');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', (req, res) => {
    User.register(new User({
        username: req.body.username, password: req.body.password,
        phone: req.body.phone, email: req.body.email
    }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.render('register');
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect('/login');
        })
    })
})

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})

app.listen(3000, () => {
    console.log('The server is running at port 3000!!')
})