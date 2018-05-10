const passport = require('passport');
require('./strategies/local.strategy')();

module.exports = function passportConfig(app) {

    app.use(passport.initialize());
    app.use(passport.session());

    //Almacena al usuario en sesión
    passport.serializeUser((user, done) => {
        done(null, user)
    });

    //obtiene al usuario de la sesión
    passport.deserializeUser((user, done) => {
        //hacer algo como find by id
        done(null, user)
    });

}