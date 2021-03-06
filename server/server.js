
const express = require('express');
require('dotenv').config();

const moment = require('moment');
moment().format();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const projectsRouter = require('./routes/projects.router')
const projectInfoRouter = require('./routes/projects.router')
const developerProjectRouter = require('./routes/developerProject.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/project_info', projectInfoRouter);
app.use('/api/developer_project', developerProjectRouter)

// Serve static files
app.use(express.static('build'));


// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
