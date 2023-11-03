var btnreg = document.getElementById("btnreg");

btnreg.addEventListener("click", function (s) {
    s.preventDefault();
    var fname = document.getElementById("Firstname").value;
    var lname = document.getElementById("Lastname").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("p1").value;
    var cpwd = document.getElementById("p2").value;




    //email id expression code
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    localStorage.setItem('email', email);
    localStorage.setItem('p1', pwd);
    localStorage.setItem('Firstname', fname);
    localStorage.setItem('Lastname', lname);
    if (fname == '') {
        alert('Please Enter Your First Name');
    }
    else if (!letters.test(fname)) {
        alert('First Name field required only alphabet characters');
    }
    else if (email == '') {
        alert('Please Enter Your E-mail ');

    }
    else if (!filter.test(email)) {
        alert('Invalid E-mail');
    }
    else if (lname == '') {
        alert('Please Enter Your Last Name');
    }
    else if (!letters.test(lname)) {
        alert('Last name field required only alphabet characters');
    }
    else if (pwd == '') {
        alert('Please Enter Your Password');

    }
    else if (cpwd == '') {
        alert('Enter Confirm Password');
    }

    else if (pwd != cpwd) {
        alert("Password Don't Match");
    }
    else if (document.getElementById("p2").value.length < 8) {
        alert('Password minimum length is 8');
    }
    else if (document.getElementById("p2").value.length > 12) {
        alert('Password max length is 12');
    }
    else {
        alert('Thank You for Registering');
        // Redirecting to other page
        window.location.replace("login.html");
    }

})



