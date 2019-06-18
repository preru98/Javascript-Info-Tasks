let varBody=document.querySelector('body');
let varImage=document.querySelector('#image1')
//  alert(varBody);  //doubt 1
varBody.addEventListener('click',function(event){
// alert('coordinates' + event.pageX+':'+event.pageY);
let leftVar=event.pageX+'px'; 
let topVar=event.pageY+'px'; 
console.log(leftVar);
console.log(topVar);
varImage.style.left=leftVar;
varImage.style.top=topVar;
});
