const express = require('express')

const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose')
const app = express()


app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Server is running...')
})

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${ PORT }`)))
    .catch((error) => console.log(error.message));


