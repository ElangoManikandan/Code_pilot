let map =new Map();
map.set("A",1);
map.set('Bullet',2);
console.log(typeof(map))
console.log(map.get("Bullet"))
console.log(map.has("A"))
// const arr=new Array();
// arr.push(2);
// console.log(typeof(arr));
arr=[1,2,3,4]
console.log(typeof(arr))

for(let[key,value] of map){
    console.log(`key is ${key},value is ${value}`)
}


