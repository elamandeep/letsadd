const menu=document.querySelector('.menu')
const hamburger=document.querySelector('.hamburger')
const link =document.querySelector('nav ul li a')
console.log(link);
hamburger.addEventListener('click',()=>{
    menu.classList.toggle('open') 
    hamburger.classList.toggle('change')   
    hamburger.classList.toggle('fixed')
})

