
const btns=document.querySelectorAll('.color-btn');
const body=document.querySelector('body');

btns.forEach((btn)=>{
// console.log(btn)

btn.addEventListener('click',function(e){
    //console.log(e.target.id)
    body.style.backgroundColor=e.target.id
  
    
});


});
