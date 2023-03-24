const express = require('express')
const app = express()
const PORT = 5000
const db = require('./app/models')

//parse request of content-type -application/json
app.use(express.json())

//
app.use(express.urlencoded({extended : true}))

db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect Database')
})
.catch(err => {
    console.log('Cancont connect Database',err)
})

// app.get('/', (req,res) => {
//     res.send('Default route')

// })

require ('./app/routes/students.routes')(app)

app.listen(PORT,() => console.log(`Server satart on port  ${PORT}`))