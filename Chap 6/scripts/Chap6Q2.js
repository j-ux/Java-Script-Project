function validate(){
	
	let phone = document.getElementById("phone-number").value
	
	if(phone.length==13 && phone.charAt(0)== "(" && phone.charAt(4)==")" && phone.charAt(8)=="-"){
		alert("you entered corrent phone number")
	}
	else{
		
		alert("please enter again")
	}
	
	
	
}











		
		
		
	
	
	
	
 

    