const restful = require('node-restful')
const mongoose = restful.mongoose

const cadastroSchema = new mongoose.Schema({
    name: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Cadastro', cadastroSchema)