const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');

const app = express();

// connect db
require('./database/dbConfig');

// view engine configuration
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');



// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// routes
app.use(routes);




// server
app.listen(3000, () => console.log('Server running in port 3000'))