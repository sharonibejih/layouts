const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = pass.value.trim();

    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }


};


// function checkInputs() {
//     //get the values of the inputs
//     const fnameValue = fname.value.trim();
//     const lnameValue = lname.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = pass.value.trim();

//     if (fnameValue === '') {
//         // show error
//         // add error class
//         setErrorFor(fname, "First Name cannot be blank");
//     } else {
//         // add success class
//         setSuccessFor(fname);
//     }



    // if (lnameValue === "") {
    //     // show error
    //     // add error class
    //     setErrorFor(lname, "Last Name cannot be blank");
    // } else {
    //     // add success class
    //     setSuccessFor(lname);
    // }

    // if (emailValue === "") {
    //     // show error
    //     // add error class
    //     setErrorFor(email, "Looks like this is not an email");
    // } else {
    //     // add success class
    //     setSuccessFor(email);
    // }

    // if (passwordValue === "") {
    //     // show error
    //     // add error class
    //     setErrorFor(pass, "Password cannot be empty");
    // } else {
    //     // add success class
    //     setSuccessFor(pass);
    // }

// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement; // div inside the form
//     const small = formControl.querySelector("small");

//     // add error message inside small
//     small.innerText = message;

//     formControl.className = "form-control error";
// }

// function setSuccessFor(input) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control success";
// }
