function validation(){
    var fname=document.querySelector(".fname");
    var lname=document.querySelector(".lname");
    var user=document.querySelector(".user");
    var pass=document.querySelector(".pass");
    var email=document.querySelector(".email");
    var ferror=document.querySelector(".ferror");
    var lerror=document.querySelector(".lerror");
    var usererror=document.querySelector(".usererror");
    var emailError=document.querySelector(".emailError");
    var passerror=document.querySelector(".passerror");

    if(fname.value == ""){
        ferror.innerHTML="Please Enter Your Full Name";
        return false
    }else if(fname.value.length < 5 || fname.value.length > 10){
        ferror.innerHTML="Your Name Should Be Between 5-10 Cherecters";
        return false
    }else if(lname.value == ""){
        lerror.innerHTML="Please Enter Your Full Name";
        return false
    }else if(fname.value != lname.value ){
        lerror.innerHTML="Please Cheack Your First Name";
        return false
    }else if(user.value == ""){
        usererror.innerHTML="Please Enter Your User Name";
        return false
    }
    else if(user.value.length < 5 || user.value.length > 10){
        usererror.innerHTML="Your Name Should Be Between 5-10 Cherecters";
        return false
    }else if(email.value == ""){
        emailError.innerHTML = "Please Type Your Email Address";
        return false;
    }else if(pass.value == ""){
        passerror.innerHTML="Please Type Your Password";
        return false;
    }else if(pass.value.length < 4 || pass.value.length > 20){
        passerror.innerHTML="Your Password Should Be Between 4-20 Cherecters";
        return false;
    }
    
} 