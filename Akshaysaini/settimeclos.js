// function x(){
//     var i=0;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste");
// }

// function x(){
//     for(let i = 1; i<=5; i++){ //use let and var
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Hello");
// }
// x();

//or
function x(){
    for(var i = 1; i<=5; i++){
        function c(i){
            setTimeout(function(){
                console.log(i);
            },i*3000);
        }
        c(i);
    }
}

x();