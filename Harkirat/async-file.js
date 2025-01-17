const fs = require("fs");
fs.readFile("../Harkitat/a.txt","utf-8", function(err,data){
    if(err)
        console.log("Error reading file");
    else
    console.log(data);
});

console.log("hello world");
