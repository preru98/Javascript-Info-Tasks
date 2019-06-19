let varInterval,speedx=1,speedy=1;
let varBody=document.querySelector('body');
let varImage=document.querySelector('#image1')
//  alert(varBody);  //doubt 1
varBody.addEventListener('click',function(event){
// alert('coordinates' + event.pageX+':'+event.pageY);
// let centreX=event.pageX-40;
// let centreY=event.pageY-40;

setInterval(moveRight,69); //calling moveright func
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

function moveRight(){
    let xVarCurrent=convertNumber(window.getComputedStyle(varImage).left);
    let yVarCurrent=convertNumber(window.getComputedStyle(varImage).top);

    // console.log(xVarCurrent); //num value
    // console.log(" : ");

    speedx+=0.5;
    speedy+=0.5;

    xVarCurrent+=speedx;
    yVarCurrent+=speedy;
    

    
    // console.log(xVarCurrent); //coverted

    let xNewString=xVarCurrent+'px';
    let yNewString=yVarCurrent+'px';

    varImage.style.left=xNewString;
    varImage.style.top=yNewString;

    // console.log(xNewString);

    // let yVarCurrent=window.getComputedStyle(varImage).top;
    // console.log(yVarCurrent);
    // // speedy+=0.5;
    // // yVarCurrent+=speedy;
    // // let yNewString=yVarCurrent+'px';
    // // varImage.style.top=yNewString;
    // // console.log(yNewString);

}
function convertNumber(leftString)
    {
        let shortString=leftString.substring(0,leftString.length-2);
        let convertedNum=parseFloat(shortString);                       //parseInt
        return convertedNum;
    }
