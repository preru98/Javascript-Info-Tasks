let buttonVar1=document.querySelector("#buttonOneImage");
let buttonVar2=document.querySelector("#buttonTwoImage");
let buttonVar3=document.querySelector("#buttonThreeImage");
let flagA=true,flagB=true,flagC=true;       //true value: divs are still visible

let divVar1=document.querySelector("#divOne");
let divVar2=document.querySelector("#divTwo");
let divVar3=document.querySelector("#divThree");

buttonVar1.addEventListener('click',function(){
    divVar1.parentNode.removeChild(divVar1);
    flagA=false;
    if(flagB==true)
        divVar2.style.top='4px';
//     // else
//     //     if(flagC===true)
//     //         divVar3.style.top='4px';
    });

// buttonVar2.addEventListener('click',function(){
//     divVar2.style.visibility='hidden';
//     });

// buttonVar3.addEventListener('click',function(){
//     divVar3.style.visibility='hidden';
//     });

