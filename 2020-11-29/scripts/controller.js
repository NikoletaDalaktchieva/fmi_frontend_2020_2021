function validateLogin(email, pass, error) {
    var email = document.getElementsByName("email")[0].value;
    if(!email) {
        error.innerHTML = 'Email is required';
        return false;
    }

    if (email.indexOf('@') == -1)
    {
        error.innerHTML = 'Email has to contains @';
        return false;
    }

    if (email.indexOf('.') == -1)
    {
        error.innerHTML = 'Email has to contains .';
        return false;
    }

    if (email.length < 5)
    {
        error.innerHTML = 'Email is too short';
        return false;
    }


    if(pass.length < 6) {
        error.innerHTML = 'Password is too short';
        return false;
    }

    if(pass.toLowerCase() == pass) {
        error.innerHTML = 'Password has to contain upper letters';
        return false;
    }

    if(! /\d/.test(pass)) {
        error.innerHTML = 'Password has to contain numbers';
        return false;
    }
    if(! /[!@#$%^&]/.test(pass)) {
        error.innerHTML = 'Password has to contain special symbols';
        return false;
    }
    return true;
}

function validateRegister(username, email, password, error) {
    if (!username) {
        error.innerHTML = 'Username is required';
        return false;
    }

    return validateLogin(email, password, error);
}

function loginUser(event) {
    event.preventDefault();

    let error = document.getElementById('errors');
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;

    if (!validateLogin(email, password, error)) {
        return;
    }

    window.auth.login(email, password, (isSuccessfull, errorCode, errorMessage) => {
        if (isSuccessfull) {
            window.location.href = "posts.html";
        } else {
            error.innerText = errorMessage;
        }
        
    });
}

function registerUser(event) {
    event.preventDefault();

    let error = document.getElementById('errors');
    let username = document.getElementsByName("username")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;

    if (!validateRegister(username, email, password, error)) {
        return;
    }

    window.auth.register(username, email, password, (isSuccessfull, errorCode, errorMessage) => {
        if (isSuccessfull) {
            window.location.href = "posts.html";
        } else {
            error.innerText = errorMessage;
        }  
    });
}