let varInterval,speedx=1,speedy=1,flagx=1,flagy=1;
let varBody=document.querySelector('body');
let varImage=document.querySelector('#image1')
//  alert(varBody);  //doubt 1
varBody.addEventListener('click',function(event){
// alert('coordinates' + event.pageX+':'+event.pageY);
let centreX=event.pageX-40;
let centreY=event.pageY-40;
moveRight(centreX,centreY);

// varInterval=setInterval( function(){
//     moveRight(centreX,centreY);
// },16);
varInterval=setInterval(moveRight,centreX,centreY,16);

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
    let yVarCurrent=convertNumber(window.getComputedStyle(varImage).top);

    // console.log(xVarCurrent); //num value
    // console.log(" : ");
    
    if(xVarCurrent<=x)
        { 
          speedx+=0.5;
          xVarCurrent+=speedx;
          let xNewString=xVarCurrent+'px';
          varImage.style.left=xNewString;
        }
    else
          flagx=0;
console.log(flagx);
    if(yVarCurrent<=y)
        {
          speedy+=0.5;
          yVarCurrent+=speedy;
           let yNewString=yVarCurrent+'px';
           varImage.style.top=yNewString;
        }
    else 
           flagy=0;
           console.log(flagy);
    if(flagx===0 || flagy===1)
    clearInterval(varInterval);
    
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
