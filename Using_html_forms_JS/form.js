
function validateData(){
    try{
        let emailInput=document.querySelector('#registeration').elements.namedItem("email");
        let contactInput=document.querySelector('#registeration').elements.namedItem("contact");
        let emailSummary=document.querySelector('#email-summary');
        let contactSummary=document.querySelector('#contact-summary');

        let expressionEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // let expressionEmail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let expressionContact=/^([0-9]{10})$/;
        let contactValid, mailValid;

        // alert(email.match(expressionEmail));
        if(expressionEmail.test(emailInput.value)==true){
            emailSummary.style.color="white";
            emailSummary.textContent="Email is validated";
            mailValid=true;
        }
        if(expressionContact.test(contactInput.value)==true){
            contactSummary.style.color="white";
            contactSummary.textContent="Contact is validated";
            contactValid=true;
        }
        if(mailValid==true && contactValid==true){
            return true;
        }
        else{
            if(mailValid!=true){
                document.querySelector('#email-summary').style.color="red";
                document.querySelector('#email-summary').textContent="Please enter valid email!";
                document.querySelector('#registeration').elements.namedItem("email").focus();
            }
            if(contactValid!=true){
                document.querySelector('#contact-summary').style.color="red";
                document.querySelector('#contact-summary').textContent="Please enter valid contact!";
                document.querySelector('#registeration').elements.namedItem("contact").focus();
            }
            return false;
        }
    }
    catch(e){
        console.log(e);
        return false;
    }
}