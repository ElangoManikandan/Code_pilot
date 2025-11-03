async function sayHello(){
    return setTimeout(()=>{
        console.log("It Prints after 4 second");
    },4000);
}
sayHello()
console.log("hello");
