var express = require('express');
var userRouter = express.Router();
var mongoose = require('mongoose');

var User = require('../models/userModel');


var router = function () {



    userRouter.route('/')
        .post(function (req, res) {

            var user = new User(req.body);
            User.findOne({
                username: req.body.username
            }, function (err, userEx) {
                if (err) {
                    res.status(505).send(err);
                } else {
                    if (userEx) {
                        res.status(404).send('Username is already using');
                    } else {
                        user.save();
                        res.json(user);
                    }
                }

            });
        })
        .get(function (req, res) {

            User.find(function (err, users) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(users);
                }

            });

        });
    
    
    userRouter.route('/:username')

    .get(function (req, res) {

        User.findOne({
            username: req.params.username
        }, function (err, user) {

            if (err) {
                res.status(505).send(err);
            } else {
                res.json(user);
            }

        });
    });

    return userRouter;
};

module.exports = router;