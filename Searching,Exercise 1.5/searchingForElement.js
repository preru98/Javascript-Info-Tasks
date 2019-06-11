alert(outerDiv +' First Statement');
alert(window.outerDiv +' Second Statement');
alert(div-inside-div+' Third Statement');
   //It won't work since it will not be treated as variable(it contains special character '-' in it)
alert(window['div-inside-div']+' Fourth Statement');
   //It won't work until third statement is commented-out
let outerDiv='Prerna Sharma';
alert(outerDiv+' Fifth Statement'); 
   //It won't work until first, second and third statements are commented-out
   //name conflicts with outerDiv
   //using getElementById will be less cumbersome
//let outerDiv=document.getElementById('outerDiv');
//alert(outerDiv+' Sixth Statement');
let outerDiv=document.querySelectorAll(outerDiv);
alert(outerDiv+' Seventh Statement');