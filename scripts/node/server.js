/**
 * Module dependencies
 */

var express = require('express')
var bodyParser = require('body-parser')
var ent = require('ent')

const app = express()

const messages = [];

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/messages', (req, res) => {
  var b = ""
  messages.forEach(function(element) {
    b += "-" + element + "<br>"
  })
  res.send(b)
})

app.post('/messages', (req, res) => {
  messages.push(ent.encode(req.body.message))
  res.send(messages)
})

app.listen(process.env.PORT || 3000)
