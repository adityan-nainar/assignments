const fs = require("fs");

fs.readFile("a.txt","utf-8",(err, data)=>{
    console.log(err);
    console.log(data);
});

let i=0;

while(i<10000){
    console.log(i);
    i++;
}