//this will also work
// Hoisting - it is the process of moviing all funtions declaration  at the top of file
//  function declaration
nameOfFuntion();
function nameOfFuntion() {
    console.log("Function");
}

// Function assignment
// named function assignment
let stand = function walk(){
    console.log("Function assignment");
}
// using only stand we can call function
// and in function assignment function call cant be done before declaration 

let st = stand;
st();

// anyonymous function assignment
let stand2 = function() {
    console.log("walking..");
};


function sum(a,b) {
    console.log(arguments);
    return a+b;
}

let ans = sum(1,2,3,4);

function sums(a,b) {
    let total = 0;
    for(let value of arguments)
        total = total+value;
    return total;
}

let a = sums(1,2,3,4,5);
console.log(a);

// Rest operator  ...
function sub(...val) {
    console.log(val);
}

sub(1,2,3,34,25,26)

function subs(a,b,...val) {
    console.log(val);
}

subs(1,2,3,34,25,26)

function ptr(p,r=5,y=10) {
    return p*r*y/100;
}

console.log(ptr(1,undefined,undefined));


let person ={
    name:"Soumay",
    lastname:"Sikchi"
};

console.log(person)

function fullName() {
    return `${person.name} ${person.lastname}`
}

console.log(fullName())

// getter setter
// getter -> access properties
// setter -> change or update properties


let student = {
    sname:"sam",
    slast:"nan",
    get fullName(){
        return `${student.sname} ${student.slast}`;
    },
    set fullName(value){
        if(typeof value!== 'string') {
            throw new Error("You have not sent a string")
        }
        let parts = value.split(' ');
        this.sname = parts[0];
        this.slast = parts[1];
    }
};

// student.fullName= `Soumayyyyy sikchi`
// console.log(student.fullName)

// try catch -

try{
    student.fullName= true;
}catch(e) {
    // alert("ERROR FOUND RE SAHI KR");
    alert(e)
}