var email= document.getElementById("email");
var pass= document.getElementById("password");


function validate(callback){
  var alert= document.getElementById("alert");


    if(email.value=="")
    {
      email.focus();
      email.style.border="solid 3px red";
    //email.setAttribute("placeholder","Username cannot be empty");
    //email.style.color="red";
    alert.style.display="block";
    alert.innerHTML="<span style='color:red;'>Username cannot be empty</span>";
    return false;
    }else if(email.value=="admin")
    {
      var callbkValue=pass.value;
     return  callback(callbkValue);
     if(callbkValue==1234){return true;}
     
    }else{
      email.focus();
      email.style.border="solid 3px red";
    // email.setAttribute("placeholder","Username cannot be empty");
    //email.style.color="red";
    alert.style.display="block";
    alert.innerHTML="<span style='color:red;'>Please enter a valid username</span>";
    return false;
    }
    }

    function logCheck(callbkValue){
      var alert= document.getElementById("alert");
   
      if(pass.value=="")
    {
      alert.style.display="none";
      email.style.border="none";
      pass.focus();
      pass.style.border="solid 3px red";
    alert1.style.display="block";
    alert1.innerHTML="<span style='color:red;'>Password cannot be empty</span>";
    return false;
    }else if(pass.value==12345){
      console.log(callbkValue);
        window.location("todoPage.html");
    }else{
      alert.style.display="none";
      email.style.border="none";
      pass.focus();
      pass.style.border="solid 3px red";
      alert1.style.display="block";
      alert1.innerHTML="<span style='color:red;'>Please enter a valid password</span>";
      return false;
    }
     return callbkValue;
    }

  
