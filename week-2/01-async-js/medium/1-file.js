const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data)=>{
//     console.log(data);
//     data = data.replace(/\s{2,}/g, " ");
//     fs.writeFile("a.txt", data,(err)=>{
//         console.log(err);
//         console.log("file written");
//         fs.readFile("a.txt", "utf-8", (err, data)=>{
//             console.log(data);
//         })
//     })
// });

function myRead(filepath){
    return new Promise((resolve, reject)=>[
        fs.readFile(filepath, "utf-8", (err, data)=>{
            resolve(data);
        })
    ])
}

function myWrite(filepath, data){
    return new Promise((resolve, reject)=>{
        fs.writeFile(filepath, data, (err)=>{
            if(err){console.log(err);}
            else{
                resolve(filepath);
            }
        })
    })
}


myRead('a.txt').then((data)=>{
    console.log(data);
    data = data.replace(/\s{2,}/g, " ")
    return myWrite("a.txt", data);
}).then((value)=>{
    console.log(value);
    return myRead(value);
}).then((value)=>{
    console.log(value);
})
