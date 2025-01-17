var d = new Promise(function(resolve){
    resolve("Hello");
});

function afterPromise(data){
    console.log(data);
    console.log(d);
}
d.then(afterPromise);