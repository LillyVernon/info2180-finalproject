document.addEventListener("DOMContentLoaded", function() {


    btn = document.getElementById("submit");
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var data = "fname=" + fname + "&lname=" + lname + "&email=" + email + "&password=" + password;
        var xmlhttp2 = new XMLHttpRequest();
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "http://localhost:8080/BugMe.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 || this.status === 200) {
                document.getElementById("results").innerHTML = this.responseText;
            }
        };
        xmlhttp.send(data);


    });
});