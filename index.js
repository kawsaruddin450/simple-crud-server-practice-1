const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res)=> {
    res.send(`CRUD server is running on: ${port}`)
})
app.listen(port);