function validateForm() {
	var fname = document.forms["messageForm"]["firstname"].value; //sets the value of first name from text field to new variable fname
	var lname = document.forms["messageForm"]["lastname"].value; //sets the value of last name from text field to new variable lname
	var email = document.forms["messageForm"]["email"].value; //sets the value of email from text field to new variable email
	var gender = document.forms["messageForm"]["gender"].value; //sets the value of gender from radio button to new variable gender
	var message = document.forms["messageForm"]["message"].value; //sets the value of message from text field to new variable message

	if (fname == "" || lname == "" || message == "" || email == ""){ //Shows a pop-up window to alert the users
		alert("Empty fields are not allowed. Please fill all the fields.");
	}
	else {
		alert("Thank you for your feedback.");//Shows the pop-up window to alert the users about completion of form
	}
}











