express = require 'express'
app     = express()
_       = require 'lodash'

roomCtrl = require './lib/controllers/roomCtrl'
roomCtrl = new roomCtrl

app.get '/api/rooms', (req, res) ->
  res.send 'Hello World!';

app.listen 4000, ->
  console.log('Example app listening on port 4000!');
