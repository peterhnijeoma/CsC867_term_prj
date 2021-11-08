const express = require('express');
const router = express.Router();
const login = require('../controller/authenticate/login');

/* GET users listing. */
//router.get('/', function (req, res, next) {
//    res.send('respond with a resource');
//});

/* GET login page. */
console.log("in login router");
router.get('/', function (req, res, next) {
    //console.log("inside get login router")
    res.render('login', { error: false });
});

/* Login user */
router.post('/', function (req, res, next) {
    const username = req.body.username;
    let loginResult = login(username, req.body.password);
    if (loginResult)
    {
        res.render('lobby', {username: username});
    }
    else {
        res.render('login', {error: true});
    }
});


module.exports = router;

