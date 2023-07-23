const express = require('express');
const app = express()
const mongoose = require('mongoose')
const Router = require('./routes/jewelry')
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://DwipshikhaLodh:Dlodh%4001@cluster0.tnck5ao.mongodb.net/?retryWrites=true&w=majority')


app.use(Router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})