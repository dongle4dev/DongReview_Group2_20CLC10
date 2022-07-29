const mongoose = require('mongoose');
const connection = mongoose.createConnection(process.env.URI_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

connection.on('connected', () => {
    console.log(`Connected database successfully!`)
})
connection.on('disconnected', () => {
    console.log(`Disconnected database!`)
})
connection.on('error', (err) => {
    console.log(`Error: ${JSON.stringify(err)}`)
})
process.on('SIGINT', async () => {
    await connection.close()
    process.exit(0)
})

module.exports = connection
