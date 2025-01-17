console.log("hello")
{
var a = 5
}
const b = 25
console.log(a)
console.log(b)
function example(){
    console.log("example");
};

// object creation
let rect = {
    len: 2,
    breadth: 4,

    draw: function(){
        console.log("Draw");
    }
};

let z = {
    value:10,
    ans:20,
};
console.log(z.ans)
// factory function creation
function createRectangle() {
    let rectangle = {
        len:1,
        bred:2,
        draw: function() {
            console.log("Draw rect func-2");
        }
    };
    return rectangle;
}


// another 
function createRectangle2() {
    return rectangle = {
        len:1,
        bred:2,
        draw: function() {
            console.log("Draw rect func-2");
        }
    };
}

// creating object

let o1 = createRectangle();


// passing input parameter to factory function
function crR(len,br) {
    return rect ={
        length:len,
        breadth:br,
        draw() {
            console.log("Draw rect")
        }
    }
};

let o2 = crR(10,20);

// consturctor function ---------------
// pascal notation - first letter of every word is cpit; 

function Circle(len,bre){
    // initialize objects at time of creation
    this.length = len;
    this.breadth =bre;
    this.draw = function() {
        console.log("Drawings");
    }
};

// object creating using constructor
// new keyword return empty object
let circleobj = new Circle(15,55);
let circleobj2 = new Circle(20,55);
circleobj.color ="green";
console.log(circleobj)
delete circleobj.color
console.log(circleobj)
delete circleobj.length
console.log(circleobj)
delete circleobj.draw

// Constructor property ----------------------------------
// function is also an object and every object will have constructor
//  try to print circleobj.constructor and Circle.constructor in console.log

let Rect = new Function('leng','bred',`this.length = leng;
    this.breadth =bred;
    this.draw = function() {
        console.log("Drawings");
    }`
);
let r1 = new Rect(200,300)
console.log(r1)


