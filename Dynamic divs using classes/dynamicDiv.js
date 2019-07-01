class addDiv{
    constructor(content){
        this.content=content;
    }
    addNewRecord(){
        let newContainerDiv=document.createElement("div");
        let newImageDiv=document.createElement("div");
        let newCrossButton=document.createElement("img");
        
        let newPara=document.createElement("p");
        let newPhrase=document.createTextNode(this.content);
        
        newCrossButton.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Crystal_Clear_action_button_cancel.svg/1024px-Crystal_Clear_action_button_cancel.svg.png";
        newCrossButton.height='100%';
        newPara.appendChild(newPhrase);
        newImageDiv.appendChild(newCrossButton);
        newContainerDiv.appendChild(newImageDiv);
        newContainerDiv.appendChild(newPara);

        let superMainDiv=document.querySelector('#mainDiv');
        superMainDiv.appendChild(newContainerDiv);

        newCrossButton.classList.add('buttonOneImage');
        newContainerDiv.classList.add('divOne'); 
        newImageDiv.classList.add('buttonOne');

    }
}

let myDiv=new addDiv('I am a new Div created dynamically ussing javascript');
myDiv.addNewRecord();
var allButtons= document.querySelectorAll(".buttonOneImage");
var allDivs= document.querySelectorAll(".divOne");

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click',function(){
        allDivs[i].parentNode.removeChild(allDivs[i]);
    });      //event listener ends here
}            //for loop ends here


