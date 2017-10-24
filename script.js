	function submit(){
    document.getElementById("myForm").onsubmit = function() {submitpopup()}
    function submitpopup(){
	  alert("The form has been submitted");
		}}
	
	
	function confirmEmail() {
	  var email1 = document.getElementById("email_field").value
	  var email2 = document.getElementById("email_confirm").value
	    if(email1 != email2)
	      {
		    alert('Email Not Matching');
		  }  
	}
