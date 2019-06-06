    let image=document.querySelector('#imageID');
    let buttonVar=document.querySelector('#button1');
    let intervalVar,flag=0,speed=1;
    buttonVar.addEventListener('click',function(){
        console.log(flag);
        if(flag==1)
        {clearInterval(intervalVar);}
        else
        {intervalVar=setInterval(moveRight,16);}
            
    })
    function moveRight()
    {
        let leftNumeric=convertNumber(window.getComputedStyle(image).left);
        speed+=0.05;
        leftNumeric+=speed;
        newLeft=leftNumeric+'px';
        console.log(newLeft);
        image.style.left=newLeft;
    }
    function convertNumber(leftString)
    {
        let shortString=leftString.substring(0,leftString.length-2);
        let convertedNum=parseFloat(shortString);                       //parseInt
        return convertedNum;
    }
    buttonVar.addEventListener('dblclick',function(){
        console.log('Two');
    // clearInterval(intervalVar);
        image.style.left='10px';
        flag=1;
    //image.setAttribute('left','10px');
    })