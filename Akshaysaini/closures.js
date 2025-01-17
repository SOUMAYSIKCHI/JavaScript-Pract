//function bundled with lexical scope is called closure
function c(){
    let a = 20;
    function d(){
        console.log(a);
    }
     return d;
}

var z = c();
console.log(z);
z();