// // let variable ------------------------------------------------------------------->
// {
//     let a = 5; // a scope is in this bracket only
//     // console.log(a)
// }
// //console.log(a); //error a is not defined

// function elephant() {
//     let b = 20;
// }
// // console.log(b); error

// // var ================----------------------------------------------------------------
// {
//     var a = 10;
// }
// //console.log(a); // no error

// //var variable scope is in file or only in function defined
var b = 20;
function cat(){
    var c = 10;
    console.log(b); //undefined
    console.log(b); //50
}
 cat();
// //console.log(c); //error
// console.log(b); //20


// //constant------------------------------------------------------------------------------------------------
// {
//     const x = 20;
// }
// const x = 100;
// console.log(x);  
// const y = 15;
// function dog(){
//     const x = 40;
//     console.log(x);
//     console.log(y);
//  //   const y=100; //error
// }

// dog();
// ele();
// function ele(){
//     const x = 1235;
//     console.log(x);
// }


// //console.log(x); error
// -------------------------------------------------
// var a = 20;
// {
//     let a = 30;  // this is possible
//     console.log(a);
// }
// //let a = 40;//error

// console.log(a);

// ----------------------------------
// let a = 30;
// {
//     var a= 40;
// }