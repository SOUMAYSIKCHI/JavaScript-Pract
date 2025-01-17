function soumay(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hello");
        },3000);
    });
}

async function main(){
    let value = await soumay();
    console.log("hello their 1 is this");
    console.log(value);
}

main();
console.log("bhaiya me pehle");
another();
console.log("bhiaya2 me bhi hu ");

function another(){
    setTimeout(function(){
        console.log("hello man");
    },1000);
}