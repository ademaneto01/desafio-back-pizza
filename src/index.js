require('dotenv').config();
const express = require('express')
const route = require('./route')
const cors = require('cors')


const app = express()
app.use(express.json());
app.use(cors())
app.use(route)
app.listen(process.env.PORT || 3000)