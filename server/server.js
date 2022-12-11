const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    //lodsh
    const num = _.random(0,20);
    console.log(num);

    //*** set response ***

    //Response with plain
    // res.setHeader('Content-Type','text/plain');
    // res.write('url : '+req.url+'\n'+'method : '+req.method);
    // res.end();

    // //Response with html
    // res.setHeader('Content-Type','text/html');
    // res.write('<h5>This is h5</h5>');
    // res.write('<p>this is paragraph</p>');
    // res.end();

    //Response with file
    // res.setHeader('Content-Type','text/html');
    // fs.readFile('../view/index.html',(error,data)=>{
    //     if(error){
    //         console.log(error);
    //         res.end();
    //     }else{
    //         res.write(data);
    //         res.end();
    //     }
        
    // });

    //Response with route
    res.setHeader('Content-Type','text/html');
    let path = '../view/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        default:
            path+='404.html';
            res.statusCode=404;
    }
    fs.readFile(path,(error,data)=>{
if(!error){
        res.write(data);
        res.end();
}else{
    res.end();
}

    });


});

server.listen(3000,()=>{
    console.log('listening to request');
});
