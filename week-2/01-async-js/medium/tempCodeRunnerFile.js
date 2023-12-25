
// function myreadFile(filepath){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(filepath, "utf-8", (err,data)=>{
//             if(err){reject(err);}
//             else{resolve(data);}
//         });
//     });
// }

// myreadFile("a.txt")
//     .then((data)=>{
//         data = data.replace(/\s{2,}/g," ");
//         fs.writeFile("a.txt", data, (err)=>{console.log(err);})
//         return new Promise((resolve, reject)=>{
//             resolve("a.txt")
//         })
//     }).then((value)=>{
//         fs.readFile(value, "utf-8", (err, data)=>{ console.log(data);})
//     })
//     .catch((err)=>{console.log(err);})
