// math object
console.log(Math.random());
console.log(Math.round(1.2));
console.log(Math.min(1,2,3,4));
console.log(Math.sqrt(2));
console.log(Math.abs(-2));
// String is an primitive data type
console.log("Hello jee")

let firstname = "Soumay";
let lastname = new String("  Love");
console.log(typeof(firstname)) //string
console.log(typeof(lastname)) //object

console.log(firstname.length);
console.log(firstname[0]);
console.log(firstname.includes('So'));
console.log(firstname.startsWith("Sou"));
console.log(firstname.endsWith("ay"));
console.log(firstname.toUpperCase())
console.log(firstname.toLocaleUpperCase())
console.log(lastname.trim())

let msg = "This is a message";
let words = msg.split(' ');
console.log(words);
let newMsg = msg.replace('is', 'soumay');
console.log(newMsg);
// Template literal 
let ques = `First line,${firstname},
\'
Second line\'

Third line
`
console.log(ques)

let ans = "This is my first msg\n2nd msg \n3rd msg"
console.log(ans)

// Escape sequence
let sol = " \' \"This is escape sequence example\" ";
console.log(sol);


// Date

let date = new Date()
console.log(date)

let d2 = new Date('June 20 1822')
console.log(d2)

let d3 = new Date(2004,3,15,4,24,32)
d3.setFullYear(2005)
console.log(d3)
