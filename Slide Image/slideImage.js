let image=document.querySelector('#imageID');
let buttonVar=document.querySelector('#button1');
buttonVar.addEventListener('click',function(){
    console.log('HEllo');
setInterval(moveRight,20);
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