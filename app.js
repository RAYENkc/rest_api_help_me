const express = require('express');
const cors = require('cors');
const app = express();


const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())
const usersRoute = require('./routes/user')
app.use('/users', usersRoute)

app.get('/',(req,res) => {
  app.use('/users', usersRoute)
})

mongoose.connect(
  process.env.MONGODB_URL,
  () => console.log('rrrrrrrrrrrr'))

app.listen(process.env.PORT || 5000)