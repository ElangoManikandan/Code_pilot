let number=10/0;
console.log(number)
//THe Above Program is not an error

// SYNTAX ERROR
// console..log("Hello")
//REFERENCE ERROR
console.log(num)
//TYPE ERROR
// a=5
console.log(a.length())
//RANGE ERROR
arr=new Array(-3)
console.log(arr)
//CUSTOM ERROR
throw new Error("H ")

//EXCEPTION HANDLING
try{
    throw new Error("Custom Error")
    console.log(a);
}catch(error){
    console.log(error);
    console.log(20);
}finally{
    console.log(30)
}

