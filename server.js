const express = require('express');
const routes = require('./controllers')
const sequelize = require('./config/connection');
const path = require('path');

// require('dotenv').config();

const helpers = require('./utils/helpers');

// handlebars set up
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

// express-session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: "super super secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
//express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// set handlebars as default temp engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// routes
app.use(routes);

// listen
sequelize.sync({force: false}).then ( () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});