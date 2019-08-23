function music () {
	
	let hiphop = document.getElementById ("HipHop").value;
	let randb  = document.getElementById ("randb").value;
	let rock = document.getElementById ("rock").value;
	let rap = document.getElementById ("rap").value;
	let country  = document.getElementById ("country").value;
	let age = document.getElementById ("age")
	let gender = documentElement ("gender")
	
	let selected_age=0 , selected_gender=0
	
	for(let i=0 ; i<=3; i++){
		if age [i].checked) {
			
			selected_age=age[i].value
			
		}
	}
	
	for(let j=0 ; j <=2 ; j++) {
		
		if(gender[j].checked) {
			
			selected_gender=gender[j].value
		}
	}
	
	document.getElementById("output").innerHTML = "ratings are<br>hip hop:"+HipHop+"<br>randb:"+randb+"<br>rock:"+rock+"<br>rap:"+rap+"<br>country:"+country+"
	age: "+selected_age+" <br> gender: "+selected_gender"
	
	
}	


	
	
	
	