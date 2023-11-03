// Login

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function (e) {
  e.preventDefault();
  var getemail = localStorage.getItem("email");
  var getpass = localStorage.getItem("p1");

  var email1 = document.getElementById("email1").value;
  var p11 = document.getElementById("p11").value;

  if (email1 == getemail) {
    if (p11 == getpass) {
      console.log("pass");
      alert('Exam Will Start Soon...');
      window.location.replace("exam.html");
    } else {
      alert("Password don't Match");
    }
  } else {
    alert("E-mail don't Match");
  }
});

