// alert("Hello World!")
  
function func(){
   
    {
    // console.log(i)
    const i=10;
    console.log(i)
    }
    // console.log(i)
}
func()
// console.log(i)
console.log(typeof 10);
console.log(typeof 2.4);
console.log(typeof func);
console.log(typeof null);
console.log(typeof "Hello");
console.log(typeof [1,2,"qwe"]);
console.log(typeof {number:123,"name":"asd"});
// console.log(typeof null);
let x=5;
console.log();

//Operators
//Type Cohersion
//Temporary literals

// control Statements
for(let i=0;i<=10;i++){
    console.log(i);
    if(i==5){
        break;
    }
}
//
function cube(number){
for(let i=0;i<=10;i++){
    console.log(i);
    if(i==4){
        return number;
    }
    if(i==5){
        break;
    }
}
}
let c=cube(5);
console.log(c);

(function(){
    console.log("hi");
    console.log("nice to Meet you");
})();


const greet=()=>{
    console.log("Hello");   
}
// console.log(greet);
greet();
function hi(name,location){
    console.log(`Vanakkam da ${name} ${location} la irundhu`)
}
hi("mapla","theni")


(()=>{})();
//Function Expression[()]
// invoke[()];


//TASK-29-09-25
function maxOfTwo(num1,num2){
    if(num1>num2)
    {
        console.log(num1)
    }
    else
    {
        console.log(num2)
    }
}
maxOfTwo(7,8);

let func=function(num1,num2){
    return num1*num2;
}
console.log(func(3,4));

let cd=(company,duration)=>`company name:${company} ,duration : ${duration}`
console.log(cd("Google","30 years"))

let sub=(a,b)=>a-b;
console.log(sub(-32,-12));

// hey("mapla","theni")
hey("mapla","chennai")
const hey=(name,location)=>{
console.log(`Vanakkam da ${name} ${location} la irundhu`);
}


let call=(func,name,location)=>{
    return func(name,location);
}
call(hey,"Adam","America");
let what=()=>console.log("Function called");
what()

//Higher Order Function
function funct(){
    return (a,b)=>a*b;
}
const u=funct();
console.log(u(3,2));

//ARRAYs

const foods =new Array('Idly','Dosa','Briyani','Chicken Rice');
console.log(foods)
console.log(foods.slice(1,3))

const drinks=['RedBull','7up','Mountain dew','Pepsi']
// console.log(drinks.slice(-4,-2))
drinks.push('Tilo');
drinks.shift();
drinks.unshift('Sprite');
drinks.includes('sprite');
console.log(drinks)
drinks.includes('Sprite');
console.log(drinks.indexOf('sprite'));