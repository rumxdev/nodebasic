import express from 'express';
const app = express();
const path = require('path')
const port = 8080;
const viewEngine = require('./configs/viewEngine')

viewEngine(app);


app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.listen(port, () => {
    console.log(`This app running on ${port}`)
})