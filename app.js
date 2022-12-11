const express = require('express');

const app = express();

app.get('/',(req,res)=>{

    res.send('<p>This is home page</p>');

});

app.get('/home',(req,res)=>{
    res.sendFile('./view/index.html',{root:__dirname})

});

app.get('/about',(req,res)=>{
    res.sendFile('./view/about.html',{root:__dirname})

});

//redirect
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

//404 page
app.use((req,res)=>{
    res.sendFile('./view/404.html',{root:__dirname})
});

app.listen('3000');