/* eslint-disable object-curly-spacing */
const express = require('express');
const api = require('./api');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

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

mongoose.connect('mongodb://spaxxkey:91408916B.c@virtualstandup-shard-00-00-guo2k.azure.mongodb.net:27017,virtualstandup-shard-00-01-guo2k.azure.mongodb.net:27017,virtualstandup-shard-00-02-guo2k.azure.mongodb.net:27017/test?ssl=true&replicaSet=virtualstandup-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB');
  app.listen(app.get('port'), () => {
    console.log('API Server listening on port ' + app.get('port'));
  });
});

