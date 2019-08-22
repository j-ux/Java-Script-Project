
let itr=prompt("how many numbers do you want to enter")

let evenarray=[ ]

let oddarray=[ ]

let even_sum=0

let odd_sum=0

let evenavg=0

let oddavg=0

   for(let i=1; i<=itr; i++){
	   
	   let num=prompt("enter a number")
   
        if(num%2==0){
			even.push(num);
			even_sum=even_sum + i;
			
		}
		else{
			even.push(num);
			odd_sum=odd_sum + i;
			
		}
		
		}
		
		evenavg=(even_sum/evenarray.length);
		
		oddavg=(odd_sum/oddarray.length);
		
		console.log("sum evenarray is" + even_sum);
		
		console.log("avg evenarray is" + evenavg);
		
		console.log("sum oddarray is" + odd_sum);
		
		console.log("avg oddarray is" + oddavg);
		
		
		
	
