function findsum(n) {
    let sum = 0;
    for(let i = 0; i<=n; i++) {
        sum+=i;
    }
    return sum;
}

function finsumtill100() {
    console.log(findsum(100));
}

//busy watiing
function syncSleep()
{
    let a = 0;
    for(let i = 1; i<=100000000; i++) {
        a++;
    }
    for(let i = 1; i<=100000000; i++) {
        a++;
    }
    for(let i = 1; i<=100000000; i++) {
        a++;
    }
}
syncSleep();
setTimeout(finsumtill100,1000);
console.log("Hello world");
