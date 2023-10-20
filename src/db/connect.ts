const mongoose = require('mongoose')

const dbName = 'ts_crud'

const db = () => {
    return mongoose.connect(`mongodb://db:27017/${dbName}`, {})
    .then(() => {
        console.log('Connected to database')
    });
}

module.exports = db