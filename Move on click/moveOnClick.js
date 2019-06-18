let varBody=document.querySelector('body');
alert(varBody);  //doubt 1
varBody.addEventListener('click',function(event){
alert('coordinates' + event.pageX+':'+event.pageY);
});