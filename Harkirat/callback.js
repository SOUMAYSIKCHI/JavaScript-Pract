function sum(a,b,f){
    f(a+b);
}

function displayResult(data){
    console.log(`The sum of two numbers is ${data}`);
}

sum(5,10,displayResult);