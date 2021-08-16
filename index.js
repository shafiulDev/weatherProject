const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const url = "mongodb+srv://shafiul1:shafiul1@cluster0.ox3pc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(cors())

app.use(express.static('public'))
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connection Successful.");
    })
    .catch();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use('/api/history', require('./api/route'))

const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
    console.log('App is Running on Port' + PORT)
    // mongoose.connect(url, {useNewUrlParser:true}, ()=>{
    //     console.log('Dtabase Connected')
    // })
})