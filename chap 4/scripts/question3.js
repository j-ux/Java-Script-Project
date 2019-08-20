  let Trips= prompt("How many trips do you want to enter")

let names = []
let miles = []
let gallons = []


for(let i = 1 ; i <= Trips; i++){

	names.push(prompt("Enter trip name"))
	miles.push( prompt("Enter trip miles"))
	gallons.push(prompt("Enter trip gallons"))
}

console.log("trip_name array = "+ names)
console.log("trip_miles array = "+ miles)
console.log("trip_gallon array = "+ gallons)


document.write("<table><tr><th>Trip name</th><th>Miles</th><th>Gallons</th><th>MpG</th></tr>");


for(let k = 0 ; k < names.length ; k++){

	document.write("<tr>")
		document.write("<td>")
			document.write(names[k])
		document.write("</td>")

		document.write("<td>")
			document.write(miles[k])
		document.write("</td>")

		document.write("<td>")
			document.write(gallons[k])
		document.write("</td>")

		document.write("<td>")
			document.write(miles[k]*gallons[k] + "mpg")
		document.write("</td>")

	document.write("</tr>")
}

	

	
	