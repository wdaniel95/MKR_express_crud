const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

const path = require('path');

const tasksRoutes = require('./routes/tasksRouter');
const userRoutes = require('./routes/userRouter');

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
app.use(cookieParser());

// routes
app.use(tasksRoutes);
app.use(userRoutes);



// server
app.listen(3000, () => console.log('Server running in port 3000'))