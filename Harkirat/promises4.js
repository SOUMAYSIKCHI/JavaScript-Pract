function soumay(){
    return new Promise(function(resolve){
        setTimeout(resolve,1000);
    });
}

function tobeCalled(a,b,c) {
    console.log(a+b+c);
}
//soumay.then();
var ans = soumay();
console.log("Hello-1");
ans.then(tobeCalled(1,2,3));
console.log("Hello-2");


//another example ;;;;;;;;;;;;;;
// function soumay(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("Hello");
//         },1000);
//     });
// }

// var ans = soumay();
// ans.then(function(){
//     console.log("how do u do");
// })


//another exampleeeeeeeeeeeeeee
// function soumay(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("Hello");
//         },1000);
//     });
// }

// function main(){
//     soumay().then(function(d){
//         console.log(d);
//     });
// }

// main();