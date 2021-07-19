const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use(routes);

// listen
sequelize.sync({force: false}).then ( () => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
});