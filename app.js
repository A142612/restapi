const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());

app.use(bodyParser.json());

// import routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);



// connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{ useUnifiedTopology: true, useNewUrlParser: true },
() => console.log('connected to DB !'));


// how to we 

app.listen(3000);