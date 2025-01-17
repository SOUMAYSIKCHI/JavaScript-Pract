// let arr=[1,2,3,4,5];

// let total = 0;
// for(let value of arr)
//     total = total+value;

// console.log(total)
// // let sum = arr.reduce((callbackfunction=accumulator used to store sum,currentvalue=>values of arrays..)=>(accumula...+currentvalue),0 means initilaize accumulator to 0);
// let totalsum = arr.reduce((accumulators,currentValueeee) => accumulators+currentValueeee,0);
// console.log(totalsum);

// Arrays - collection of items for primitive data types
let num = [1,2,3,4,5] 
console.log(num)
console.log(num[3]);
num.push(15) // insert at last index end
console.log(num)
num.unshift(99) //insert at first index beginning
console.log(num)
num.splice(2,0,'a','b','c'); //at middle from index 2 insert a,b,c and delete 0 element
console.log(num)
num.splice(5,2,'x','y','z');
console.log(num)
console.log(num.indexOf('a'));
// to check if no exist in array
if(num.indexOf(1)!=-1)
    console.log("Present");

console.log(num.includes('a'));
console.log(num.indexOf(99,3));


// for removing
num.pop();  // remove from ending
num.shift(); //remove from beiginning
console.log(num);
num.splice(4,3); // remove from middle at from 4th index remove 3 element including 4th index
console.log(num);

// for references for objects we cannot use indexOf,includes bcoz adress are different
let courses = [
    {no:1,name:"Soumay"},
    {no:2,name:"Rahul"}
];
// find element array.find(predicate function(araayname){returns object})
console.log(courses);
let cs = courses.find(function(courses){
    return courses.name=="Soumay";
})
console.log(cs)

// Arrow function
let csr = courses.find(courses => courses.name=="Soumay");



// empty an array
let abs= [1,2,3,4,5];
let b = abs;
abs.length=0;
// or abs.slice(0,abs.length);


// combining and slicing array
let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);

// slice(start index,ending index);
let sliced = combined.slice(2,4);
console.log(sliced);
let sl = combined.slice(2);
console.log(sl);
let sli = combined.slice(); //full slicing
console.log(sli);

//spread operator ...
let f = [1,2,3];
let s = [4,5,6];
let com = [...f,...s];
console.log("spread operator:",com);
let c = [...f,'a',...s,,'b',true];
console.log("spread operator:",c);
//copy creating: using spread
let another = [...com];
console.log("Copy using spread",another);

// iterating an array
// for(let value of another){
//     console.log(value);
// }

another.forEach(function(num){
    console.log(num);
}
);

another.forEach(num=>console.log(num));

//Joining arrays
let j = [10,20,30,40,4550]
const join  = j.join(',');
console.log(join);
const sr = join.split(',');
console.log(sr);
const p = sr.join('_');
console.log(p);

// sorting array
let q = [5,10,4,40];
q.sort();
console.log(q);
q.reverse();
console.log(q);



//The issue with your code is that JavaScript's sort() method sorts elements as strings by default. This can lead to unexpected results with numerical arrays. To sort numbers correctly, you need to provide a comparison function to sort().
let o= [5, 10, 4, 40];

// Sort the array in ascending order
o.sort((a, b) => a - b);
console.log(o); // Output: [4, 5, 10, 40]

// Reverse the sorted array
o.reverse();
console.log(o); // Output: [40, 10, 5, 4]

let a = [1,2,-1,-4];

let ans = a.filter(function(value){
    return value>=0;
});

// let l= a.filter(value => value>=0);

console.log("filter = ",ans);


// Mapping an array : maps each element of array to something else
let arr = [1,2,3,4];

let g = arr.map(function(value){
    return 'Student no :'  + value+' Example';
});

let u = arr.map(value=> 'student_exm'+value);
console.log(u);
console.log(g);

// Mapping with objects
let x = [1,2,-5,-9];
let filtered = x.filter(value => value>=0);

let items =filtered.map(function(val){
    let obj = {value:val};
    return obj;
})

let i = filtered.map(arr=> ({value:arr}));
console.log(i);
console.log(items);

// chaining
let m = x.filter(value => value>=0).map(arr=> ({value:arr}));
console.log(m);