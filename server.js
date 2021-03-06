const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes/placeorder.routes.js')(app);

app.listen(3000, () => {
    console.log('Customer API running on port 3000');
})

