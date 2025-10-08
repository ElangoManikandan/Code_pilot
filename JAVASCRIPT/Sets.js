const setArray=new Set([1,1,1,1,1,1])
setArray.add(7);
setArray.add(4);
console.log(typeof(setArray))
setArray.forEach(element => {
    console.log(element)
});
const nullSet=new Set();
console.log(nullSet);

const uniq=new Set(1,2,2,3,3,3);
console.log(uniq)
uniq.add(5);
uniq.delete(5);
console.log(uniq.size);

const arr=new Array(1,2,3,3);
console.log(arr);