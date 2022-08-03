const express = require('express');
const app = express();
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//routes
const userRoutes = require('./routes/user')




//environment variable pr you can say constants
env.config();
//mongodb connection
//mongodb+srv://<username>:<password>@cluster0.wjdzk.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.wjdzk.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {useNewUrlParser:true,
    useUnifiedTopology: true
    }
    ).then(()=>{
        console.log('database connected')
    });

app.use(bodyParser());
app.use('/api',userRoutes)


app.listen(process.env.PORT,() => {
    console.log(`Sever is running on port ${process.env.PORT}`)
})