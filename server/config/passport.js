const JwtStrategy = require('passport-jwt').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');

const User = require('../models/User');
const auth = require('../config/auth');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : auth.local.secretOrKey
};



module.exports = passport => {
    passport.use(
        new JwtStrategy(options,(jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if(user) {
                        return done(null, user);
                    }
                    return done(null, user);
                })
                .catch(err => console.log(err))
        })
    );

    // WIP
    passport.use(new FacebookStrategy({
        clientID: auth.facebookAuth.id,
        clientSecret: auth.facebookAuth.key,
        callbackURL: auth.facebookAuth.callbackUrl
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({'facebook.id': profile.id }, (err, user) => {
            // If err, just return done
            if(err) {
                return done(err);
            }
            // If a facebook id matches a user, return user
            if(user) {
                return done(null, user);

                // if no user has been found, create new user. 
            } else {
                
                const newUser = new User();

                newUser.facebook.id = profile.id;
                newUser.facebook.token = token;
                newUser.facebook.name = profile.displayName;
                newUser.facebook.email = profile.emails[0].value;

                newUser.save(err =>{
                    if(err) {
                        throw err
                    }
                    return done(null, newUser);
                })
            }
            return cb(err, user);
        })
    }
    ))

};
