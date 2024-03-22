// age_checker 
const userAge = document.querySeletor('age').innerHTML("age")
const remainYears = 35 - userAge;

function ageChecker(){
	if (userAge == 35){
		document.write("You are an adult");
		alert("Congratulaions!!!! you are now elligible to use this platform");
	}else if (userAge < 10){
		document.write("Hey Kid, What are you doing here?!!!! you are not elligible to use this platform, quickly call the attention of your Mum,Dad or wait till" + remainYears + "years to have acesss"
	}else {
		document.write("Welcome to the Joint-Heirs Connect Platform");
	}
}

ageChecker()