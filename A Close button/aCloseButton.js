let buttonVar1=document.querySelector("#buttonOneImage");
let divVar1=document.querySelector("#divOne");
let buttonVar3=document.querySelector("#buttonThreeImage");
let divVar3=document.querySelector("#divThree");
buttonVar3.addEventListener('click',function(){
    divVar3.style.visibility='hidden';
});
let buttonVar2=document.querySelector("#buttonTwoImage");
let divVar2=document.querySelector("#divTwo");
buttonVar1.addEventListener('click',function(){
    divVar1.style.visibility='hidden';
});
buttonVar2.addEventListener('click',function(){
    divVar2.style.visibility='hidden';
    });