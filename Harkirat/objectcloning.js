// object cloning -.diff memory location not same
// using iteration
// using Assign
// using Spread
// using iteration :
let src = {
    value:13,
    ans :0
};

let src2 ={
    b:20,
    c:30
};

let dest ={
}

for(let key in src){
    dest[key] = src[key];
}
console.log(dest)

// using assign
let f = Object.assign({},src);
console.log(f)
// using 2 :
let f2 = Object.assign({},src,src2);
console.log(f2);


// using spread
let ans = {...src};
console.log(ans);
// Garbage collection
// we have no control over garbage collector //de alllocate memory of var/const which is not used ...freen up memory..run in bg
