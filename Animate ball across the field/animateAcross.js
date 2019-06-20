let varInterval,flagx=1,flagy=1;let xVarCurrent,yVarCurrent,speedx,speedy;
let varBody=document.querySelector('body');
let varImage=document.querySelector('#image1')
//  alert(varBody);  //doubt 1
varBody.addEventListener('click',function(event){
// alert('coordinates' + event.pageX+':'+event.pageY);

let centreX=event.clientX-40;
let centreY=event.clientY-40;
xVarCurrent=convertNumber(window.getComputedStyle(varImage).left);
yVarCurrent=convertNumber(window.getComputedStyle(varImage).top);
speedx=((centreX-xVarCurrent)/15);
speedy=((centreY-yVarCurrent)/15);

varInterval=setInterval( function(){
    
     moveRight(centreX,centreY);
},16);
// varInterval=setInterval(moveRight,centreX,centreY,16);

//calling moveright func
// varInterval=setInterval(function(){
//     moveRight(centreX,centreY);
// },16); //calling moveright func

// let leftVar=centreX+'px'; 
// let topVar=centreY+'px'; 
// console.log(leftVar);
// console.log(topVar);
// varImage.style.left=leftVar;
// varImage.style.top=topVar;
});

function moveRight(x,y){
    let xVarCurrent=convertNumber(window.getComputedStyle(varImage).left);
    console.log('xVarCurrent:'+xVarCurrent);
    let yVarCurrent=convertNumber(window.getComputedStyle(varImage).top);
    console.log('yVarCurrent:'+yVarCurrent);
    console.log('x value:'+ x); //num value
    console.log('y value:'+ y); //num value
    
    if(xVarCurrent<x)
       {
          xVarCurrent+=speedx;
          let xNewString=xVarCurrent+'px';
          varImage.style.left=xNewString;
        }
    else
         {flagx=0;
          console.log('value bigger than x');
         }
         console.log(flagx);
    if(yVarCurrent<y)
        {
            
           yVarCurrent+=speedy;
           let yNewString=yVarCurrent+'px';
           varImage.style.top=yNewString;
        }
    else 
          { flagy=0;
            console.log('value bigger than y');
            
          }
          console.log(flagy);
    if(flagx===0 && flagy===0)
   { clearInterval(varInterval);
     flagx=1;
     flagy=1; }
    
    // console.log(xVarCurrent); //coverted

    // let xNewString=xVarCurrent+'px';
    // let yNewString=yVarCurrent+'px';

    // varImage.style.left=xNewString;
    // varImage.style.top=yNewString;
}
function convertNumber(leftString)
    {
        let shortString=leftString.substring(0,leftString.length-2);
        let convertedNum=parseFloat(shortString);                       //parseInt
        return convertedNum;
    }
