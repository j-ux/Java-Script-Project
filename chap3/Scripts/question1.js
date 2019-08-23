
function tempToF(){
    
	let temp = document.getElementById("temperature").value
	
	let result=5/9*(temp-32)

		document.getElementById("output").innerHTML= result
	
	
}
	
function tempToC(){
	
		let temp = document.getElementById("temperature").value

    let result=(temp*5/9)+32
	
		document.getElementById("output").innerHTML=result
	
	
	
}