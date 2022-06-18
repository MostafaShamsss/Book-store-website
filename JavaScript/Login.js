var username = document.getElementById("username");
var password = document.getElementById("password");


function validateUsername(username)
{
  var regexUsername = /^[a-z0-9_\.]+$/;
  if (username.value.match(regexUsername)) 
  {
    return true; 
  }

  else 
  {
    return false; 
  }
}

function checkPassword(password) 
{ 
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(password.value.match(passw)) 
    { 
        return true;
    }
    else
    { 
        return false;
    }
}

function showHint()
{
    if(username.value.length == 0)
    {
        alert("please enter your username first to show you the password hint");
    }
    else
    {
        //pass the hint of the username from the database
        alert();
    }
}

function setHint()
{
    var flag = true;
    if(validateUsername(username)==0)
    {
        alert("Usernames can only use letters, numbers, underscores, and periods.");
        flag = false;
    }

    if(checkPassword(password)==0 && flag)
    {
        alert("Please make sure your password is between 6 to 20 characters which contains at least one numeric digit, one uppercase and one lowercase letter.");
        flag = false;
    }

    if((username.value.length != 0) && (password.value.length != 0) && flag)
    {
        var hint = prompt("Please enter a hint in case you forgot your password", "ex. from 1 to 5");
        //save hint to the database with the user's email and password
    }

    else
    {
        if(flag)
        {
            alert("please enter username and password first");
        }
    }
}