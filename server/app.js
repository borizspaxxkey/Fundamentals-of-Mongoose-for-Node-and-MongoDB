/* eslint-disable object-curly-spacing */
const express = require('express');
const api = require('./api');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.set('port', (process.env.PORT || 8081));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api', api);
app.use(express.static('static'));
app.use(morgan('dev'));

app.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.json(err);
});

app.listen(app.get('port'), () => {
  console.log('API Server listening on port ' + app.get('port'));
});
