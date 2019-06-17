ch=0;
let varText=document.querySelector('#para1');
varText.addEventListener('click',function(){
   if(ch%2==0)
    { varText.textContent=' '; }
   else
    { varText.textContent=' Hello! I am a good text. I swear. Please do not click me, IT WILL HIDE ME- F O R E V E R :(';}
   ch++;
})
