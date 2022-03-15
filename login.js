// Variabler & Funktioner defineret
	function passed() {
	window.open("index.html");
	}

function loginknap() {
	
let emaill = (document.getElementById("email").value);
let korrekt = [];{
	korrekt[0]="kbja38691@edu.ucl.dk";
	korrekt[1]="cbwi40474@edu.ucl.dk";
	korrekt[2]="feje31686@edu.ucl.dk";
	korrekt[3]="jama37791@edu.ucl.dk";
	korrekt[4]="rabe37833@edu.ucl.dk";
	korrekt[5]="jjha38943@edu.ucl.dk";
	korrekt[6]="Admin";
}
// Kontrol af e-mail input
	if (emaill == korrekt[0]){
	(alert( "Hej og velkommen til StudyBuddy Kasper")+ passed());  
		}
		else if (emaill == korrekt[1]){
	(alert( "Hej og velkommen til StudyBuddy Christopher")+passed());  
		}
		else if (emaill == korrekt[2]){
	(alert( "Hej og velkommen til StudyBuddy Frederik")+passed());  
		}
		else if (emaill == korrekt[3]){
	(alert( "Hej og velkommen til StudyBuddy Jannik")+passed());  
		}
		else if (emaill == korrekt[4]){
	(alert( "Hej og velkommen til StudyBuddy Rasmus")+passed());  
		}
		else if (emaill == korrekt[5]){
	(alert( "Hej og velkommen til StudyBuddy Jonas")+passed());  
		}
		else if (emaill == korrekt[6]){
	(alert( "Hej og velkommen til StudyBuddy Admin")+passed());  
		}

	else
		alert("Brugernavn: Admin");
	

    //* Modal *//
}

let modal = document.getElementById("glemtkode");

// Tilbage knap

let button = document.getElementsByClassName("tilbage")[0];


// Get the button that opens the modal
let btn = document.getElementById("glemtkodeknap");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  	if (event.target == modal) {
    	modal.style.display = "none";
  	}
	
		button.onclick = function() {
  		modal.style.display = "none";
	};
};

// LOOP 

const admins = ["Kasper ", "Christopher ", "Frederik ", "Jannik ", "Rasmus ", "Jonas "];
	
let copy = "Copyrights © Gruppe12 \n \n " 

let text = "";
	for (let i = 0; i < admins.length; i++) {
	text += admins[i] + '\n'+ '\n';
		
	}
	
console.log(copy + text);