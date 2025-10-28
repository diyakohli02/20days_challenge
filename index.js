require('dotenv').config()
const express = require('express')
const app = express()

// Define a fallback port for local development, as process.env.PORT is usually set by Render (or other hosting)
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.send(`Server is up and running on port ${port}`)
})

try {
    app.listen(port, () => {
        console.log(`SERVER STARTED: App listening on port ${port}`)
    });
} catch (error) {
    // This will force the crash reason to appear in the Render logs
    console.error("SERVER FAILED TO START. ERROR MESSAGE:", error.message); 
}