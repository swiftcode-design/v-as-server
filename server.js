const express = require('express'),
massive = require('massive'),
bodyParser = require('body-parser'),
app = module.exports = express()

app.use(bodyParser.json());
app.get('/test', (req, res) => {
  res.send('bitch')
})
app.listen(3030, console.log('30303 son'))
