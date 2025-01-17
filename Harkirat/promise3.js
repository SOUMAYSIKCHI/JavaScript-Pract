function soumay(){
    return new Promise(function(resolve){
        resolve("Hi,this is resolved");
    });
   // return p;
}

function tobeCalled(onDone){
    console.log(onDone);
    console.log("Done");
}

var ans = soumay();
ans.then(tobeCalled);