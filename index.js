const express = require('express');
// we also need to require the 'path' module
const path = require('path');

app = new express();
app.use(express.static('public'));

//create actual routes to our pages:
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'));
});

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'));
});

app.get('/post',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'))
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server started on port: ${PORT}`);
});
