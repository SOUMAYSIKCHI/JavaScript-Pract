
//async func always  return a promise
// async function getData() {
//     return "Namaste";
// }
// const data = getData();
// console.log(data);
// data.then(res=>console.log(res));

const p = new Promise(function(resolve){
    resolve("Promise resolved");
});

// p.then(x=>console.log(x));

//async and await are used to handle promises
//await can only be used inside an asyn function
async function handlePromise() {
    const val = await p;
    console.log("Js");
    console.log(val);
}

handlePromise();

