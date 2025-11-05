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
const data='[{"name":"Alice"},{"name":"Bob"},{"name":"Alice"}]';
try{
    let json_data=JSON.parse(data);
    let set=new Set(json_data)
    for (i of json_data){
        set.add(json_data)
    } 
    set.forEach(element=>{
        console.log(element)
    })
    let map=new Map();
    for(i in json_data)
    {
    map.set(i,json_data[i]) 
    }
    console.log(map)
    }
    catch(err){console.log("JSON is not parsed Correctly")}


