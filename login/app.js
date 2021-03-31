const http = require('http');
const app = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
        res.end("Hi Root  하이 ");
    }else if(req.url === '/login'){
        res.writeHead(200);
        res.end("Hi Login");
    }
});

app.listen(3001,()=>{
    console.log('htttp로 생성')
});


// const express = require('express');

// const app = express();


// app.get("/",function(req,res){
//     // function
//     res.send("This is root!");
// });

// app.get("/login",(req,res)=>{
//     res.send("This is Login Form");
// });

// app.listen(3000,function(){
//     console.log("서버 가동");
// });

