let itr= prompt("How many times do you wanna flip")

let input = []
let output = []



for(let i = 1 ; i <= itr; i++){
		
	input.push(prompt("What do you prefer 1 or 0"))
	
	output.push(Math.floor(Math.random() * 2))
	
}

for (k=0 ; k < input.length ; k++){
	
	if(input[k]==output[k])
	{
		document.write("You won for "+ k +"th time")
	}
	else{
				document.write("You did not won for "+ k +" time")

	}
	
			document.write("<br>")

}
