import express from 'express';
const app = express();
const path = require('path');
const viewEngine = require('./configs/viewEngine')
require('dotenv').config();
import route from './routes/web';
const port = process.env.PORT || 8080;
// setup static file
viewEngine(app);

//goi khoi tao ham init
app.use('/', route)
// bat server chay
app.listen(port, () => {
    console.log(`This app running on ${port}`)
})