let temp=parseFloat(prompt("Enter the Temperature in degress Celsius"))

if (temp < -18){
	
	alert("Bundle Up! It's really freezing out there!")
	
}

else if (temp >=-18 && temp<=0){
	
	alert("Pretty cold with a chance of snow")
	
}

else if (temp >=-17 && temp<=15){
	
	alert("Don't forget your jacket. It's still chilly outside")
}

else if (temp >=16 && temp<=27){
	alert("Perfect lovely weather...unless it rains")
}

else if (temp>=28 && temp<=35){
	alert("Nice and warm. Go for a swim")
}

else if (temp < 35) {
	alert("It's really hot! Probably best to stay in an air conditoned spot.")
}