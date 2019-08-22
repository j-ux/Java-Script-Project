function order(){
	
	let sandwiches = document.getElementsByName("sandwich")
	let sides= document.getElementsByName("side")
	let drinks= document.getElementsByName("drink")
	
	let sandwich_counter=0
	let sides_counter=0
	let drinks_counter=0
	
	
	for(let i = 0 ; i<=4 ; i++){
		
		if(sandwiches[i].checked){
			sandwich_counter++
		}
		
		if(sides[i].checked){
			sides_counter++
		}
		
		if(drinks[i].checked){
			drinks_counter++
		}
			
	}
	
	console.log("total sandwiches = "+sandwich_counter)
	console.log("total sides = "+sides_counter)
	console.log("total drinks = "+drinks_counter)
	
	if(sandwich_counter < 3 || drinks_counter == 0 || sides_counter < 3){
		
		alert("Please select atleast 3 sides and sandwiches ")
	}
	else{
		alert("Order placed!")
	}
}