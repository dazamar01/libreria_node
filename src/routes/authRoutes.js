const express = require('express');
const authRouter = express.Router();
const passport = require('passport');


function router(nav) {
    authRouter.route('/signUp')
        .post((req, res) => {

            req.login(req.body, () => {
                res.redirect('/books');
            });

        });


    authRouter.route('/signin')
        .get((req, res) => {
            res.render('signin', {
                nav,
                title: 'Sign In'
            });
        })
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        }));

    authRouter.route('/profile')
        //usar el middleware para securizar el route
        .all((req, res, next) => {
            if(req.user){
                next();
            }else{
                res.redirect('/');
            }
        })
        .get((req, res) => {
            res.json(req.user);
        });
    return authRouter;
};

module.exports = router;