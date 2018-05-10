const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const bodyParser = require('body-parser');

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

//configuración para SQL Server
const config = {
  user: 'sa',
  password: 'K10nrdaz',
  port: "1433",
  server: 'tesla', // You can use 'localhost\\instance' to connect to named instance
  database: 'PSLibrary',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

sql.connect(config).catch((err) => console.log(err));

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library' }));

require('./src/config/passport.js')(app);

app.use((req, res, next) => {
  console.log('Mi middleware');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', 'src/views');
app.set('view engine', 'ejs');

const nav = [
  { link: '/books', title: 'Book' },
  { link: '/authors', title: 'Author' }
];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);

app.use('/books', bookRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index',
    {
      nav: [{ link: '/books', title: 'Books' },
      { link: '/authors', title: 'Authors' }],
      title: 'Library'
    }
  );
});



app.listen(port, () => {
  console.log(`'Escuchando en el puerto ' ${chalk.green(port)}`);
  debug(`'listening en el port ' ${chalk.green(port)}`);
});
