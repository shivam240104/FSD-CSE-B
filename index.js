const http= require("http"); //it initialise http server

// here use require bcz type use commom js
//for creating server (whenever node create serve always http type)
// api connecting too any page
// rest api ====(api/'about')

const fs = require('fs');

// fs.writeFileSync("./cse-c.txt", "this is cover page");

// const result = fs.readFileSync("./cse-c.txt",'utf-8');
// console.log(result);

// fs.writeFile("./a.txt","This is aysnc file creation",()=>{});
// fs.readFile("./a.txt","utf-8",(err, result)=>{
//     if(err){
//         console.log("pata nhi",err);
//     }else{
//         console.log(result);
//     }
// })
  

// fs.writeFile("./b.txt","hello this is second file",(err,res)=>{
//     if(err){
//         console.log("error", err);
//     }
// })

// fs.appendFileSync("./b.txt",`in fsd lecture`)
fs.appendFile("./b.txt",` hello this is new `,(err, res)=>{
    if(err){
        console.log("error",err);
    }
})

const myserver=http.createServer((req,res)=>{
   
    const url = req.url;
    if(url === '/'){
        res.end("this is my home page");
    }
   else if(url === '/aboutus'){
        res.end("My name is Shivam. Currently I am learning backend in nodejs frame work");
        
    }
   else if(url === '/home'){
        res.end("ABES Engineering College");
        
    }
   else if(url === '/contactus'){
        res.end(`<h1>Hello I am Shivam Maurya. </h1>
          <img src="" width="300" />`);
        
    }
    else if(url === '/sample'){
        const jsonData = require('')

    }
        else{
    //this is null route
        res.end('404 !page is not found')
    }
})

myserver.listen(3001,()=>{
    console.log("Server is running on port 3001....");
});

