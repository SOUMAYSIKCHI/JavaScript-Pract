function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("Namaste Javascript");
}
x();

//--------------------------------------a problem due to closure and same reference 
function y() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
y();

// // -------------------------------solution :we know let is block space in this  every time a loop run it has new scope
// . setTimeout stores the function in a different place and attached a timer to it,
//  when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not 
// retain the original value but rather has the reference so 
// any update in value after timeout will be shown.
// 3. If we use let/const because they have block scope, 
// every time a new copy of variable is attached, thus this can be done without closure. 
function y() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
y();
//using var :
function y() {
    for (var i = 1; i <= 5; i++) {
        function close() {  //using closure
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Namaste Javascript");
}
y();
