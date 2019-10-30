const express = require('express');
const app = express();

// mongoose 
const mongoose = require('mongoose');


// middleWare 
const bodyParser = require('body-parser');


// middleware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// routes 
const userRoutes = require('./routes/user');

// These are my routes
app.use(userRoutes);



app.listen(8080,async ()=>{
    await mongoose.connect('mongodb+srv://mdv:123ABCabc@cluster0-bl67m.mongodb.net/test?retryWrites=true&w=majority').then(()=>{
        console.log("Bingo we have connected to mongoDb");
        console.log("we are listining to the  port 3000s")
    })
    
})