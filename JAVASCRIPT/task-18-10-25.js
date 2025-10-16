const numbers=[10,15,20,25,30]
function removeEvens(arr){
    let result=arr.filter(arr=>arr%2!=0)
    return result;
}
console.log(removeEvens(numbers))

//TASK 2

const student={name:"Henry",age:22,course:"CS"}
let{name,course}=student;
console.log(`${name} is studying ${course}.`);


//TASK 3
const data='[{"name:"Alice"},{"name":"Bob"},{"name":"Alice"}]';