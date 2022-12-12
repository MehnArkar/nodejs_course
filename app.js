const express = require('express');

const app = express();


//register view engine
app.set('view engine','ejs');


blog=[
//     {
//     title:'Yoshi fried egg',snippet:'this is the snippet of this blog'},
//     {title:'Damm yummy',snippet:'this is the snippet of this blog'},
//     {title:'Fish Danm',snippet:'this is the snippet of this blog'},
];


app.get('/',(req,res)=>{

    res.render('index',{title:'Home',blog});

});



app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});

});

//redirect
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'});
});

//404 page
app.use((req,res)=>{
    res.render('404');
});

app.listen('3000');