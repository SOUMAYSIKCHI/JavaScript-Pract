// First-class functions are JavaScript functions that can behave like variables. 
//They can also be passed as arguments to higher-order functions.

// Higher-order functions are functions that return a function or 
//take in a function as an argument.

Array.prototype.soumay = function() {
    let ans = [];  
    for (let i = 0; i < this.length; i++) {  
        ans.push(this[i] % 2 === 0); 
    }
    return ans;
};

let arr = [1, 2, 3, 4, 5, 6];
let ans = arr.soumay();
console.log(ans);
