


userdata = [
{
	username: 'marcus',
	password: 'candoit'
},
{
	username: 'john',
	password: 'canalso'
}
]

// this function checks to see if the entered input matches the array data
function login() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
		for (var i = 0; i < userdata.length; i++){
			if (username == userdata[i].username && password == userdata[i].password) {
			alert("Welcome " + username);
			console.log("good job");
			}	
		}
};

function register() {
	var regusername = document.getElementById('regname').value
	var regpassword = document.getElementById('regpw').value
	var newuser = {
		username: regusername,
		password: regpassword
	}
	for (var i = 0; i < userdata.length; i++) {
		if (regusername == userdata[i].username) {
			alert('That username is already taken');
			return
		} else if (regpassword.length < 8) {
			alert('Your password is too short, make it 8 or more characters');
			return
		} else {
			alert("You Are All Signed Up");
	
		}
	}

	userdata.push(newuser);
	console.log(userdata);

};