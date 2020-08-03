const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var parts = require('./controllers/updatePart');

app.use('/api/parts', parts);

app.listen(port, () => console.log(`Listening on port ${port}`));