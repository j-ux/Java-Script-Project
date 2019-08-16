let pay=prompt ("Enter your Hourly Pay")
let hours=prompt ("Enter Number of Hours")
let dependent=prompt ("Enter Number of Dependents")

let tax_rate = 28

if (dependent >= 1 && dependent <= 3){
		tax_rate=25

}

else if (dependent >= 4 && dependent <= 6){
		tax_rate=15
}

else if (dependent > 6){
		tax_rate=10
}

if(hours > 40){
		pay=pay*1.5
}

let total= (pay*hours)*4
let tax_amount= total*(tax_rate/100)
let net_pay=total-tax_amount
alert(net_pay)



