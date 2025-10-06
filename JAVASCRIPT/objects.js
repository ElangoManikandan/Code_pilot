const person={
    name:"Elango",
    age:21,
    isGraduated:true,
    city:"karur",
    phone:1234512345,
    school:{
        name:'ghss',
        duration:2
    },
    hobbies:["games","insta"],
    info:function(){console.log(this.name," is ",this.age," years old" )},
    display_school:function () {
        console.log("I am studying in "+this.school.name)
    }
}

// console.log(person.name)
console.log(person['name'])
person.degree="CSE"
console.log(person)
person.info()
person.display_school()
// delete person.school;
for(i in person){console.log(person[i])}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


const Coding=new Object();
Coding.python="beginner";
Coding.java="intermediate";
console.log(Coding);
// delete Coding;
console.log(Coding);


//Task
var obj=new Object();
obj={
    name:"Elango",
    age:21,
    id:11,
    voter_id:null,
    hobbies:["games","insta"],
    college:{
        name:"GCEB"
    },
    info:function(){
        console.log(obj)
    }
}
obj.info()
obj.id=101
delete obj.voter_id;
console.log(Object.entries(obj))