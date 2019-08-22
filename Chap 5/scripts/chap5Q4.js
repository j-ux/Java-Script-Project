
let itr=prompt("enter children's age")

let junior=[ ], juniorsum=0

let intermediate=[ ], intermediatesum=0

let senior=[ ], seniorsum=0



    for( let i=1; i<=itr; i++){
	  let age=prompt("enter age")
	   if(age>=4 && age<=7){
	   
	   juniorsum++
	   
	   }
	   
	   else if(age>=8 && age<=11){
	   intermediatesum++
	   }
	   
	   else if(age>=12 && age<=15){
	   seniorsum++
	   }
	   
	}

	   
	   console.log("children in junior league="+ juniorsum)
	   console.log("children in inter league="+ intermediatesum)
	   console.log("children in sen. league="+ seniorsum)
	   