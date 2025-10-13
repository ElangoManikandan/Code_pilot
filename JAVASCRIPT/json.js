let person={
    "name":"Jackson","age":21,"city":"texas"
}
console.log(typeof(person))
person_json=JSON.stringify(person)
console.log(typeof(person_json))
person2=JSON.parse(person_json)
console.log(person2)

fetch('https://jsonplaceholder.typicode.com/todos/3')
.then(response=>response.json())
.then(data=>{
    data.completed=true;
    console.log(data);
});

fetch('https://fakestoreapi.com/products')
.then(response=>response.json())
.then(data=>{
    console.log(data)
})














fetch('https://fakestoreapi.com/products')
.then(response=>response.json())
.then(data=>console.log(typeof(data)))