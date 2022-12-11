//fs stand for file system
const fs = require('fs');

//Read file
// fs.readFile('./docs/file.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data.toString());
// });

//Wirte file
// fs.writeFile('./docs/file.txt','Hello, World',()=>{
//     console.log('file wirtten');
// })

//Directories
// if(fs.existsSync('./assets')){
//     fs.rmdir('./assets',(error)=>{
//         console.log('file removed');
//     })
// }else{
//     fs.mkdir('./assets',(error)=>{
//         console.log('file create');
//     })
// }

//Deleting file
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(error)=>{
        console.log('file delete');
    })
}



