const fs = require('fs');

function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("./a.txt", "utf-8", function(err, data) {
        if(err)
            resolve(err);
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);