const express = require('express');
const mongoose = require('mongoose');
const config = require('./server/config');
const exphbs = require('express-handlebars');
const usersRoutes = require('./server/routes/users');

const PORT = config.PORT;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(usersRoutes);

mongoose.Promise = global.Promise;

async function start() {
  try {
    await mongoose.connect(config.mongodb_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
