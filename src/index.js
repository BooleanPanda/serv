const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/user-router');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', router);

async function start () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Users-manager', {
            useNewUrlParser : true,
            useCreateIndex : true,
            useUnifiedTopology : true,
            useFindAndModify : false
        });
        app.listen(port, () => {
            console.log('server on port ' + port);
        });
    } catch (e) {
        if (e) {
            throw e;
        };
    };
};
start();