var a = 10;
let b = 100;
const c = 1000; 
{
    var a = 20;
    let b = 200;
    const c = 2000;
    console.log(a); //global scope
    console.log(b); //block scope
    console.log(c); //block scope
}
console.log(a); //global scope
console.log(b); //script scope
console.log(c); //script scope