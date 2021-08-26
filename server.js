const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const userRoutes = require('./Routes/user')
var bodyParser = require('body-parser')
dotenv.config()
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is running...')
})

app.use('/user', userRoutes)


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${ PORT }`)))
    .catch((error) => console.log(error.message));


