
console.log('Hello')


let navbar1=document.getElementById('Solutions')
navbar1.textContent='Changed'



let logoName=document.getElementsByClassName('text')
console.log(logoName)
logoName[0].innerText='Light'

let lgname=document.getElementById('learn-more')
lgname.addEventListener("dblclick",function(){
    lgname.innerText="The website is abandoned"
})
lgname.addEventListener("mouseleave",function(){
    lgname.innerText="Learn-more"
})


// logoName.addEventListener("click",function(){
//     logoName[0].innerText="The Logo is Changed";
// })

console.log(logoName)



let login=document.querySelector('#navbar-list-login')
login.innerText='blocked'



let getStarted=document.getElementById('get-started')
getStarted.innerHTML='Unauthorized'



let learnMore=document.getElementById('learn-more')



// learnMore.addEventListener("click",function()
// {
//     window.location.href="index.html"
// })

// learnMore.addEventListener("click",function(){
//     alert("The website is under Maintenance.Kindly wait for some time.")
// })




