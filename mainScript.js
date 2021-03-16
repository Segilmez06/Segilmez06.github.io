var userName = "sarp";
var passWord = "erentronik2348";

var usr = prompt("Enter your username:");
var pass = prompt("Enter yout password:");

if (pass == passWord & usr == userName)
{
    alert("Login succesful.");
}
else if (pass != passWord && usr == userName)
{
	alert("Username or password is incorrect.");
    location.reload();
}
else if (pass == passWord && usr != userName)
{
    alert("Username or password is incorrect.");
    location.reload();
}
else if (pass != passWord && usr != userName)
{
    alert("Username or password is incorrect.");
    location.reload();
}
else
{
    alert("Failed to login.");
    location.reload();
}