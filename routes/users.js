/**
* @Author: Justin Schieck
* @Date:   2017-03-09T23:09:15-05:00
* @Email:  schieck91@gmail.com
* @Last modified by:   Justin Schieck
* @Last modified time: 2017-03-09T23:57:15-05:00
*/



var express = require('express');
var router = express.Router();
var Account = require('../models/account');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //finds all users
    Account.find(function (err, accounts) {
      //error validation
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('users', {
                title: 'Users',
                user: accounts
            });
        }
    }); 
});

module.exports = router;
