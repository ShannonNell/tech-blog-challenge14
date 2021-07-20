const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

// hiding sess password
require('dotenv').config();
// const sequelize = new Sequelize(process.env.COOKIE_PW, {
    //     host: 'localhost',
    //     port: 3306,
    //     dialect: 'mysql'
    // });
    
// express-session
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.COOKIE_PW,
    cookie: {},
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// handlebars set up
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(routes);

// listen
sequelize.sync({force: false}).then ( () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});