const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const transactions = require('./routes/transactions')

const app = express()

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 300
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port:${PORT}`.blue.bold))