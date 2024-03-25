function ageChecker(){
	// age_checker function
	var userAge = parseInt(document.getElementById('barInput').value);
	var remainYears = 35 - userAge;

	if (userAge < 18){
		document.getElementById('result').innerHTML = "Sorry kid you have: " + remainYears + "years left to join this platform";
	}else if (userAge >= 18 && userAge < 35 ){
		document.getElementById('result').innerHTML = "Well, you can still be given access considering that you're an adolescent/Young Adult";
		// console.log userAge;
	}else if (userAge >= 35 && userAge < 45){
		document.getElementById('result').innerHTML = "You so much welcome here";
	}else if (userAge >= 45){
		document.getElementById('result').innerHTML = "Hey! Platinum User, you are most welcome";
		// console.log userAge;
	}
}

// adding event listener that will clear the output once the input is cleared

document.getElementById('barInput').addEventListener('input', function(){
	const input = this.value.trim(); // this will remove the reults
	if (input === ''){
		document.getElementById('result').innerHTML = '';
	}
} );

