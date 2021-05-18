const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = requires('dotenv')

dotenv.config({ path: './routes/transactions' })

const app = express()

app.use('/API/v1/transactions', transactions)

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port:${PORT}`.blue.bold))
