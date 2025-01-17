let arr = [1,2,30,4,5];

const output = arr.reduce(function(acc,ele){
    if(ele>acc){
        acc=ele;
    }
    return acc;
},0);

console.log(output);