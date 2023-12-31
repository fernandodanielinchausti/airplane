const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();

const airplaneRoute = require('./routes/airplane');
const accessLog = require('./middleware/accessLog');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());


app.use('/airplane', accessLog, airplaneRoute);

app.listen(config.PORT, () => {
  console.log(`Listening at http://localhost:${config.PORT}`);
});

//Run import models
//./node_modules/.bin/sequelize-automate -t js -h mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com -d airline -u bsale_test -p bsale_test -o models