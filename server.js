const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    // forces the session to be saved back to the session store
    resave: false, 
    // foreces a session that is "unitialuzed to be saved back to the store
    saveUninitialized: false,
  };

app.use(session(sess));
// const hbs = exphbs.create({ helpers });
// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  
