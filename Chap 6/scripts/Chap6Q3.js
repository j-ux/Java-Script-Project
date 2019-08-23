function validate(){
	
	let phone = document.getElementById("phone-number").value
	
	if(phone.length==13 && phone.charAt(0)== "(" && phone.charAt(4)==")" && phone.charAt(8)=="-"){
		alert("you entered corrent phone number")
	}
	else{
		
		alert("please enter again")
	}
	
	
	
}

   let username=prompt("enter username")
   
   
   if(username>=4 && username<=20){
      console.log(granted)
	  }
	let password= prompt("enter password")
	
	if(password>=4 && password<=12){
      console.log(Granted)
	  }