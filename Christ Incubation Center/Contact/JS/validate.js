function validateform(){
    
  var fn=document.myform.FirstName.value;  
  var ln=document.myform.LastName.value;
  var em=document.myform.Email.value;
  var tat=document.myform.Message.value;
  var atpos=em.indexOf("@");  
  var dotpos=em.lastIndexOf(".");
    
  if(fn==null || fn==""){  
    alert("Please Enter First Name");  
    return false; }
   else if(fn.length<3){  
      alert("Please Enter First Name with more than 3 characters");  
      return false; 
  }
  else if(ln==null||ln==""){  
    alert("Please Enter Last Name");  
    return false;
  }
  else if(ln.length<3){  
    alert("Please Enter Last Name with more than 3 characters");  
    return false; 
  }
  else if(em.length<3){  
    alert("Please Enter a valid EmailId");  
    return false; 
  }
  else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=em.length){
      alert('Please enter valid EmailId with @ and . symbols');
      return false;
  }
  
  else if(tat==null|| tat==""){
    alert("Please enter a message");
    return false;
  }
  else if(tat.length<3){  
    alert("Message should be more than 3 characters");  
    return false; 
  }
  else{
      alert('Feedback Form Submitted Succesfully');
      return true;
  
  }
  }
  