const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.use(express.json());


app.listen(3000, () => {
    console.log('Server running on port 3000')
})

// app.get('/', (req, res) => {
//     res.send("Hi from the server")
// })


const MONGO_URL = "mongodb+srv://thejayadad:SLCnoaWe3YWCtywN@cluster0.v3dqq.mongodb.net/"

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));


//Routes
const postRoutes = require('./route/post.route')
app.use('/api', postRoutes)

