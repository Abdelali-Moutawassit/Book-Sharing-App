const express = require("express")
const router = express.Router()
const passport = require("passport")
const User = require('../models/User')
const session = require('express-session');
const multer = require("multer") 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})
// Create the multer upload instance using the storage configuration
const upload = multer({ storage: storage });



router.get('/Login',(req,res)=>{
    res.render('auth/login2')
})

router.get('/signup',(req,res)=>{
    res.render('auth/signup2')
})

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/auth/Login',
    failureRedirect: '/auth/signup',
    failureFlash: true, // Activer les messages flash en cas d'échec
}));

router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/auth/signup'); // Rediriger en cas d'erreur d'authentification
        }
        let redirectPath = '/users/profile'; 
        // Utiliser passport.authenticate avec les options successRedirect et failureRedirect
        passport.authenticate('local.login', {
            successRedirect: redirectPath,
            failureRedirect: '/auth/signup',
            failureFlash: true
        })(req, res, next);

    })(req, res, next);
});

router.get('/logout', (req, res) => {
    try {
        req.logout((err) => {
            if (err) {
                console.error("Error during logout:", err);
                req.flash('error', 'An error occurred during logout.');
            } else {
                req.flash('success', 'You have been logged out successfully.');
            }
            res.redirect('/auth/Login');
        });
    } catch (error) {
        console.error("Error during logout:", error);
        req.flash('error', 'An error occurred during logout.');
        res.redirect('/auth/Login');
    }
});



module.exports = router;