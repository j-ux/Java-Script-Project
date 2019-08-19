
let dependent=prompt("number of dependent")

let pay=prompt("enter your pay")

let tax_rate=33

    if(dependent=0 && pay>1000){
	     tax_rate=33
		}
    else if(dependent=0 && pay <=1000){
	     tax_rate=28
		 }
	else if(dependent>=1 && dependent<=3 && pay>1000){
	    tax_rate=25
		}
    else if(dependent>=1 && dependent<=3 && pay<=1000){
	    tax_rate=22
		}
	else if(dependent>=4 && dependent<=6 && pay>1000){
	    tax_rate=22
		}
	else if(dependent>=4 && dependent<=6 && pay<=1000){
	    tax_rate=15
	}
    else if(dependent>6 && pay>1000){
	    tax_rate=15
		}
	else if(dependent>6 && pay<=1000){
	    tax_rate=10
	}
	let total=(pay)
	let tax_amount = total*tax_rate/100
	let net_pay=total-tax_amount
    alert(net_pay)	
