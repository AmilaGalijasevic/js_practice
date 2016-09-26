//pretvaranje celsiusa u farenheite:
function convert (celsius){
	var f = (9/5) * celsius + 32;
	return f;
}
var celsius = prompt("Enter temperature in celsius: ");
while (isNaN(celsius)){
	celsius = prompt("Only numbers! Enter temperature in celsius: ");
}
console.log("The entered temperature in farenheit is: " + convert(celsius));


//volume in cylinder
function volume (){
	var radius = prompt("Enter the radius of the cylinder: ");
	var length = prompt("Enter the length of the cylinder: ");
	
	
	while (isNaN(radius)|| isNaN(length)){
		radius = prompt("Enter the radius of the cylinder: ");
		length = prompt("Enter the length of the cylinder: ")
	}
	var area = radius * radius * Math.PI;
	var volume = area * length;
	
	console.log(volume.toFixed(2));
}
volume();


//acceleration 


function acceleration (){
	var v0 = prompt("Enter the starting velocity v0 in meters/seconds: ");
	var v1 = prompt("Enter the ending velocity v1 in meters/second: ");
	var t = prompt("Enter the time span t in seconds: ");
	
	if(isNaN(v0) || isNaN(v1) || isNaN(t)){
		throw new Error("Only numbers!")
	}
	return ( v1-v0)/ t; 
}

try{
	acceleration();
	
}catch (Error){
	console.log(Error);
}
	
//interest rate 
function interestRate(){
	
	var balance = prompt("Enter the balance: ");
	var annualPercentageInterestRate = prompt("Enter Annual Percentage Interest Rate: ");
	if(isNaN(balance) || isNaN(annualPercentageInterestRate) ){
		throw new Error("Enter only numbers.")
	}else{
	
	return balance * (annualPercentageInterestRate/1200);
	}
}
try{
	
	interestRate();
	
}catch (Error){
	console.log(Error);
}


//future investment value

function investment(){
	
	var investmentAmount = prompt("Enter the Investment Amount: ");
	var annualInterestRate = prompt("Enter Percentage Interest Rate: ");
	var years = prompt("Enter number of years: ");
	
	
	while(isNaN(investmentAmount) || isNaN(annualInterestRate) || isNaN( years) ){
		investmentAmount = prompt("Enter the Investment Amount: ");
		annualInterestRate = prompt("Enter Percentage Interest Rate: ");
		years = prompt("Enter number of years: ");
		
	}
	var monthlyRate = (annualInterestRate/12)/100;
	
	return investmentAmount * Math.pow((1+monthlyRate), (years*12));
}
investment();