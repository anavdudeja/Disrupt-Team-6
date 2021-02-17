// login of user
function login() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	for(i = 0; i < objPeople.length; i++) {
		if(username.toLowerCase() == objPeople[i].username && password == objPeople[i].password) {
			confirm.innerHTML = username + " is logged in!"
			setTimeout(clear, 2000)
			return
		}
	}
	// error message if user and password don't match
	confirm.innerHTML = "incorrect username or password"
	setTimeout(clear, 2000)
}
// resgistering a new user
function registerUser() {
	var registerUser = document.getElementById("newUser").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}

	for(i=0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("This username is already in use, please choose another")
			return
		} else if(registerPassword.length < 8) {
			alert("This password is too short, include 8 or more characters")
			return
		}
	}

	objPeople.push(newUser)
	console.log(objPeople)
}
