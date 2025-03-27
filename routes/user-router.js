const express = require("express")
const router = express.Router()



router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('users/profile2', { user: req.user });
    } else {
        res.redirect('/auth/login');
    }
});

router.get('/navbar',(req,res)=>{
    res.render('partials/navbar')
})
router.get('/navbar2', (req, res) => {
    res.render('partials/navbar2')
})
router.get('/test', (req, res) => {
    res.render('users/test')
})

module.exports = router;