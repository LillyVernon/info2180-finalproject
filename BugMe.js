document.addEventListener("DOMContentLoaded", function() {


    btn = document.getElementById("submit");
    fname = document.getElementById("fname");
    lname = document.getElementById("lname");
    email = document.getElementById("email");
    password = document.getElementById("password");
    loginBtn = document.getElementById("loginbutton");

    function checkpassword(x) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        if (strongRegex.test(x.value)) {
            x.style.border = "1.5px solid green";

            return 0;
        } else {

            x.style.border = " 1px sloid red";
            return 1;
        }
    }

    function checkempty(x) {
        if (x.value.length == 0) {
            x.style.border = "1px solid red";
            return 1;
        } else {
            x.style.border = "1px solid black"
            return 0;
        }
    }


    $('#submit, #loginbutton, #issuebutton, #button4').click(function(event) {
        if ($(event.target).attr('id') == 'submit') {
            event.preventDefault();
            checkpassword(password)
            checkempty(fname)
            checkempty(lname)
            checkempty(email)
            if (checkpassword(password) == 0 && checkempty(email) == 0 && checkempty(fname) == 0 && checkempty(lname) == 0) {
                var data = "fname=" + fname.value + "&lname=" + lname.value + "&email=" + email.value + "&password=" + password.value + "&num=" + '1';
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("POST", "http://localhost:/info2180-finalProject/BugMe.php", true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState === 4 || this.status === 200) {
                        alert(this.responseText);
                    }
                };
                xmlhttp.send(data);
            }
        } else if ($(event.target).attr('id') == 'loginbutton') {
            loginemail = document.getElementById("loginemail");
            loginpassword = document.getElementById("loginpassword");
            checkempty(loginemail)
            checkempty(loginpassword)
            event.preventDefault();




            if (checkempty(loginemail) == 0 && checkempty(loginpassword) == 0) {
                var data = "loginemail=" + loginemail.value + "&password=" + loginpassword.value + "&num=" + '2';
                var xmlhttp2 = new XMLHttpRequest();
                xmlhttp2.open("POST", "http://localhost:/info2180-finalProject/BugMe.php", true);
                xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp2.onreadystatechange = function() {
                    if (this.readyState === 4 || this.status === 200) {
                        //alert(this.responseText);
                        document.getElementById("result").innerHTML = this.responseText;
                        window.location.href = "Dashboard.html", true;
                    }
                };
                xmlhttp2.send(data);


            }


        } else if ($(event.target).attr('id') == 'issuebutton') {
            event.preventDefault();
            title = document.getElementById("title")
            assign = document.getElementById("assign")
            type = document.getElementById("type")
            priority = document.getElementById("priority")
            description = document.getElementById("description")
            checkempty(assign)
            checkempty(type)
            checkempty(priority)
            checkempty(description)
            checkempty(title)
            if (checkempty(assign) == 0 && checkempty(type) == 0 && checkempty(priority) == 0 && checkempty(description) == 0 && checkempty(title) == 0) {
                var data = "assign=" + assign.value + "&type=" + type.value + "&priority=" + priority.value +
                    "&description=" + description.value + "&title=" + title.value + "&num=" + '3';
                var xmlhttp3 = new XMLHttpRequest();
                xmlhttp3.open("POST", "http://localhost:/info2180-finalProject/BugMe.php", true);
                xmlhttp3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp3.onreadystatechange = function() {
                    if (this.readyState === 4 || this.status === 200) {
                        // alert(this.responseText);
                        //window.location.href = "C:/Users/Donna/Desktop/info2180/info2180-finalproject/index.html/";
                    }
                };
                xmlhttp3.send(data);

                document.getElementsByClassName("loginresult").innerHTML = this.responseText;
                window.location = "http://www.google.com/", true;
                window.location.replace("http://stackoverflow.com");

            }


        } else if ($(event.target).attr('id') == 'button4') {
            /* specific code for button4 */
        }
    });


});