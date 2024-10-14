'use-strick'

// three btns 


const orderBtn = document.querySelector('.icon');
const orderBtn2 = document.querySelector('.icon2');
const orderBtn3 = document.querySelector('.icon3');
const compleletbtn = document.querySelector('.btn');
const paybtn = document.querySelector('.pay');
const price = document.querySelector('.order-part')
const orderM = document.querySelector('.order-msg');
const msgo = document.querySelector('.msg');
const total = document.querySelector('.total');

const all = document.querySelectorAll('.orderof');



orderBtn.addEventListener('click' , function(){
    compleletbtn.classList.remove("hidden");
    price.classList.remove("hidden");
    msgo.classList.add('hidden');
    total.classList.remove('hidden');
    
})
orderBtn2.addEventListener('click' , function(){
    compleletbtn.classList.remove("hidden");
    price.classList.remove("hidden");
    msgo.classList.add('hidden');
    total.classList.remove('hidden');
    
})
orderBtn3.addEventListener('click' , function(){
    compleletbtn.classList.remove("hidden");
    price.classList.remove("hidden");
    msgo.classList.add('hidden');
    total.classList.remove('hidden');
    
})



compleletbtn.addEventListener('click' , function(){
    orderM.classList.remove('hidden');
    total.classList.add('hidden');


})
paybtn.addEventListener('click' , function(){
    orderM.classList.add('hidden');
    compleletbtn.classList.add('hidden');
    price.classList.add("hidden");
    msgo.classList.remove("hidden");


})

