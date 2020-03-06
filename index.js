const express = require('express');
// we also need to require the 'path' module
const path = require('path');
// this is where we are going to import ejs module
const ejs = require('ejs')

app = new express();

//set our view engine
app.set('view engine','ejs');

//middleware for static and rendering pages
app.use(express.static('public'));

//create actual routes to our pages:
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
   res.render('about')
});

app.get('/contact',(req,res)=>{
    res.render('contact')
});
app.get('/post',(req,res)=>{
    res.render('post')
});

const PORT = process.env.PORT ||5000;
app.listen(PORT,()=>{
    console.log(`Server started on port: ${PORT}`);
});
