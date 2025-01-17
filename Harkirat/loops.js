// premitive type ke andar copy banti hai
// refrence type ke andar same adress point krta hai
// example for premeitive types : string,number,boolean,undefined,null
// example for refernce type =  objects,arrays,functions
// primitve:
let x = 10
let y = x
x++;
console.log(x) //11
console.log(y) //10
x = {value:10};
y = x;
x.value++;
console.log(x.value) //11
console.log(y.value) //11
a = 10
function inc(a){
    a++; //11
}
inc(a);
console.log(a); //10 pass by value primitive is passed so copy is created


// Iterating through objects -------------------------
let square = {
    side:2,
    area:20,
};

// for in loop
for(let key in square) {
    console.log(key,"value is :",square[key])
}

// Iterate over object properties
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York' };
    
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Iterate over array indices
const numbers = [1, 2, 3, 4, 5];
for (let index in numbers) {
  console.log(numbers[index]);
}

//  for...of loop
// The for...of loop iterates over the values of an iterable object (like arrays, strings, etc.).
// Iterate over array values,maps
const num = [1, 2, 3, 4, 5];
for (let number of num) {
  console.log(number);
}

// Iterate over string characters
const string = "Hello";
for (let char of string) {
  console.log(char);
}

// objects cant be itreated using for..of loop but an hack is 
for(let key of Object.keys(square)){
    console.log(key)
}
for(let key of Object.entries(square)){
    console.log(key)
}


// The forEach loop is a method of arrays that executes a provided function once for each array element.
// Print numbers from 1 to 5
const n = [1, 2, 3, 4, 5];
n.forEach(function(number) {
  console.log(number);
});

