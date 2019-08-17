let seconds = 10

function myFunction() {
  setInterval(function(){ blastoff() }, 1000);
}


function blastoff(){
	
	if(seconds >= 0){
		document.getElementById("output").innerHTML=seconds
	}
	
	if(seconds==0){
		document.getElementById("output").innerHTML="BlastOff!"
		
		}
		
		
	seconds--
	
}


