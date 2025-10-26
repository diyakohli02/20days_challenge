// require('dotenv').config()
const express = require('express')
const app = express()

// Define a fallback port for local development, as process.env.PORT is usually set by Render (or other hosting)
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('diyakohli')
})

app.listen(port, () => {
    // CRITICAL FIX: Use the 'port' variable to log the actual port the app is listening on.
    console.log(`Example app listening on port ${port}`)
})