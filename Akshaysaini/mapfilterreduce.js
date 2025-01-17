const users =[
    {firstname:"Soumay",lastname:"sikchi",age:19},
    {firstname:"Sam",lastname:"Panda",age:18}, 
    {firstname:"Rajesh",lastname:"DeshPanda",age:19},
    {firstname:"Mad",lastname:"fellow",age:30},
]

//list of full names of all user
const fullname = users.map(x=> x.firstname+" "+x.lastname);
console.log(fullname);

//all list of ages  and count
const ages = users.reduce(function(acc,ele){
    if(acc[ele.age]){
        acc[ele.age]= acc[ele.age]+1;
    }else{
        acc[ele.age]=1;
    }
    return acc;
},{})

console.log(ages);

//first name of all users whose age is less than 30
const res = users.filter(x=> x.age>=19).map(x=> x.firstname);

console.log(res);