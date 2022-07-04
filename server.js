const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// для парсинга application/json
app.use(express.json())
// для парсинга application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
// путь к папке с картинками
app.use('/static', express.static(__dirname + '/assets'))
// все запросы приходящие planes будут редиретиться
app.use('/api/planes', require('./routes/planes'))

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        app.listen(port, () => {
            console.log('App listening on a port ' + port);
        })
    })