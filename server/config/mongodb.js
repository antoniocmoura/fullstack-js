const mongoose = require('mongoose')

const db = 'mongodb+srv://appjs:2WpT2n7RSlpVvsl4@cluster0.geyyz.mongodb.net/properties?retryWrites=true&w=majority'

const connection = mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection