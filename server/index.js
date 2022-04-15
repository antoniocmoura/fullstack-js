const express = require('express');
const router = require('./routes')
const app = express()
const cors = require('cors')

require('./config/mongodb')

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3333, () => {
    console.log('App listening on port 3333')
})