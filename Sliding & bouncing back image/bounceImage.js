let image=document.querySelector('#imageID');
let buttonVar=document.querySelector('#button1');
let intervalVar,flag=0;
buttonVar.addEventListener('click',function(){
    console.log('One');
    if(flag==1)
 clearInterval(intervalVar);   
 intervalVar=setInterval(moveRight,2000);
           
})
function moveRight()
{
    let leftNumeric=convertNumber(window.getComputedStyle(image).left);
    leftNumeric+=10;
    newLeft=leftNumeric+'px';
    console.log(newLeft);
    image.style.left=newLeft;
}
function convertNumber(leftString)
{
let shortString=leftString.substring(0,leftString.length-2);
let convertedNum=parseInt(shortString);
return convertedNum;
}
buttonVar.addEventListener('dblclick',function(){
    console.log('Two');
   // clearInterval(intervalVar);
    image.style.left='10px';
    flag=1;
   //image.setAttribute('left','10px');
})