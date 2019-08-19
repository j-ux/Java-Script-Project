let name=prompt ("Enter Message")

let result=""

for (i=name.length-1 ; i >= 0 ; i--){
	
	result=result+name.charAt(i)
}

alert(result)