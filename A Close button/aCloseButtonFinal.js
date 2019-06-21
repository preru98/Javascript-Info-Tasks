var allButtons= document.querySelectorAll(".buttonOneImage");
var allDivs= document.querySelectorAll(".divOne");

// alert(allButtons.length);

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click',function(){
        allDivs[i].parentNode.removeChild(allDivs[i]);
    });      //event listener ends here
}            //for loop ends here
