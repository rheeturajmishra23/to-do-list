const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static("./public"))
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('Task Manager')
})
app.use('/api/v1/tasks',tasks)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server listening at ${port}..`))
    } catch (error) {
        console.log(error)
    }
}
start()
