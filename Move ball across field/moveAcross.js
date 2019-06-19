let varBody=document.querySelector('body');
let varImage=document.querySelector('#image1')
//  alert(varBody);  //doubt 1
varBody.addEventListener('click',function(event){
//  alert('coordinates' + event.pageX+':'+event.pageY);
 let centreX=event.pageX-40;
let centreY=event.pageY-40;
let leftVar=centreX+'px'; 
let topVar=centreY+'px'; 
console.log(leftVar);
console.log(topVar);
varImage.style.left=leftVar;
varImage.style.top=topVar;
});
