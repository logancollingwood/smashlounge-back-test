require('dotenv').load();
const Router = require('./app/Routes/Router.js');
const express = require('express')
const app = express()
const port = 3000

var router = new Router();
router.init(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))