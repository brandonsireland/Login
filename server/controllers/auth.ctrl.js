const mongoose = require('mongoose');
const User = require('../models/User');
const validators = require('../util/validator');
const bcrypt = require('bcryptjs');
const auth = require('../config/auth');
const jwt = require('jsonwebtoken');
const passport = require('passport');

exports.user_create_post = (req, res, next) => {

    const {
        errors,
        isValid
    } = validators.validateRegisterInput(req.body);

    // Check our user validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
            'local.email': req.body.email
        })
        .then(user => {

            if (user) {
                return res.status(400).json({
                    email: 'Email already exists'
                })
            }

            const newUser = new User({
                username: req.body.username,
                local: {
                    email: req.body.email,
                    password: req.body.password
                }
            });

            // hash user password and save it to db.
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.local.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.local.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });

        });
};

exports.user_login_post = (req, res) => {

    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    // Check our user validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({
        'local.email':email
    }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({
                emailnotfound: "Email not found"
            });
        }
        
        // Check password
        bcrypt.compare(password, user.local.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.username
                };
                // Sign token
                jwt.sign(
                    payload,
                    auth.local.secretOrKey, {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({
                        passwordincorrect: "Password incorrect"
                    });
            }
        });
    });
};

exports.get_facebook = () => {
    passport.authenticate('facebook', {
        scope: ['public_profile', 'email']
    });
}
exports.get_facebook_callback = () => {

    passport.authenticate('facebook', {
        successRedirect:'/success',
        failureRedirect: '/'
    });

}