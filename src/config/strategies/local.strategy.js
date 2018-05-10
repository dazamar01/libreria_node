const passport = require('passport');
const { Strategy } = require('passport-local');

//en este apartado se debe hacer la consulta del usuario

module.exports = function localStrategy() {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        }, (username, password, done) => {

            //Es en este segmento donde se hace la búsqueda del usuario en la bd

            const user = {
                username, password
            };

            //cuando el usuario tenga match
            done(null, user);

            //cuando el usuario falle
            //done(null, false);
        }
    ));
};