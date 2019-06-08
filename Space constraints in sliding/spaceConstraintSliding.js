let image=document.querySelector('#imageID');
     // reference of image
let buttonSlide=document.querySelector('#button1');
     // reference of button (Slide)
let buttonStop=document.querySelector('#button2');
     // reference of button (Slide)
let screen=window.innerWidth;
let screenWidth=parseFloat(screen);
console.log(screenWidth);
let imageSize=window.getComputedStyle(image).width;
let imageWidth=parseFloat(imageSize);
console.log(imageWidth);

let intervalVar,speed=1;
     // reference for set Interval and speed 
     //let flag=0;


     // function to call moveRight function after every 16b ms
buttonSlide.addEventListener('click',function(){
     intervalVar=setInterval(moveRight,16);
 })


     /*  function to call moveRight function after every 16b ms while using single button

buttonSlide.addEventListener('click',function(){
    console.log(flag);
     if(flag==1)
     clearInterval(intervalVar);
     else
     intervalVar=setInterval(moveRight,16);
 })
     */



     //function which actually shifts the image to the left (also calls covertNumber() )
function moveRight()
    {
     let leftNumeric=convertNumber(window.getComputedStyle(image).left);
     speed+=0.05;
     leftNumeric+=speed;// acceleration effects

     //stop the image
     if(leftNumeric>=(screenWidth-imageWidth))//leftNumeric>=(screenWidth+ imageWidth)) 
     {
        console.log('Two');
        clearInterval(intervalVar);
        image.style.left='10px';
     }
     //continue sliding
     else
     newLeft=leftNumeric+'px';
     console.log(newLeft);
     image.style.left=newLeft;
    }


    //function which takes the string(left) and convert it to float(left)
function convertNumber(leftString)
    {
     let shortString=leftString.substring(0,leftString.length-2);
     let convertedNum=parseFloat(shortString);                       //parseInt
     return convertedNum;
    }



    //function which stops the sliding effect and brings it to inital position
buttonStop.addEventListener('click',function(){
        console.log('Two');
        clearInterval(intervalVar);
        image.style.left='10px';
    })


    /*function which stops the sliding effect and brings it to inital position while using single button
    
buttonStop.addEventListener('click',function(){
     console.log('Two');
     clearInterval(intervalVar);
     clearInterval(intervalVar);
     image.style.left='10px';
     flag=1;
     image.setAttribute('left','10px');
    })
    */
   