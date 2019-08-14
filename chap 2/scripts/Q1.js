let first_name=prompt("Enter your first name")
let last_name=prompt("Enter your last name")
let school=prompt("Enter your schools name")

let split=school.split(" ")
console.log(first_name.charAt(0)+last_name.charAt(0)+split[0])
