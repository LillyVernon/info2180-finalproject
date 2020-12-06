document.addEventListener("DOMContentLoaded", function() {


    btn = document.getElementById("submit");
    fname = document.getElementById("fname");
    lname = document.getElementById("lname");

    email = document.getElementById("email");
    password = document.getElementById("passwordcreate");

    loginBtn = document.getElementById("loginbutton");

    function checkpassword(x) {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        if (strongRegex.test(x.value)) {
            x.style.border = "1.5px solid green";
            return 0;
        } else {
            x.style.border = " 1px solid red";
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


    $('#submit, #loginbutton, #issuebutton, #allbtn, #openbtn, #myticketbtn, #closed,#progress').click(function(event) {
        if ($(event.target).attr('id') == 'submit') {
            event.preventDefault();
            console.log(password.value);
            console.log(lname.value);
            checkpassword(password);
            checkempty(fname);
            checkempty(lname);
            checkempty(email);
            if (checkpassword(password) == 0 && checkempty(email) == 0 && checkempty(fname) == 0 && checkempty(lname) == 0) {
                var data = "fname=" + fname.value + "&lname=" + lname.value + "&email=" + email.value + "&password=" + password.value + "&num=" + '1';
                console.log(data)
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("POST", "BugMe.php", true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState === 4 || this.status === 200) {
                        alert(this.responseText);
                    }
                };
                xmlhttp.send(data);
            } else {
                console.log('data not sent');
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
                xmlhttp2.open("POST", "BugMe.php", true);
                xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp2.onreadystatechange = function() {
                    if (this.readyState === 4 || this.status === 200) {
                        // alert(this.responseText);
                        response = this.response;
                        console.log(this.response);
                        //document.getElementById("loadphp").innerHTML = this.responseText;
                        //window.location.href = "Dashboard.html", true;
                        if (response.localeCompare('True') == 0) {
                            window.location.href = "Dashboard.html", true;
                        } else {
                            //alert("they are not equal");
                        }
                    }
                };
                xmlhttp2.send(data);


            }


        } else if ($(event.target).attr('id') == 'issuebutton') {
            event.preventDefault();
            title = document.getElementById("title")
            assign = document.getElementById("assign")
            console.log(assign.value)
            type = document.getElementById("type")
            console.log(type.value)
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
                console.log(data)
                var xmlhttp3 = new XMLHttpRequest();
                xmlhttp3.open("POST", "BugMe.php", true);
                xmlhttp3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp3.onreadystatechange = function() {
                    if (this.readyState === 4 || this.status === 200) {
                        alert(this.responseText);
                        //window.location.href = "C:/Users/Donna/Desktop/info2180/info2180-finalproject/index.html/";
                    }
                };
                xmlhttp3.send(data);

                //document.getElementsByClassName("loginresult").innerHTML = this.responseText;
                //alert(this.responseText)

            } else {
                console.log("issue not created")
            }


        } else if ($(event.target).attr('id') == 'allbtn') {
            window.location.href = "all.html", true;
        } else if ($(event.target).attr('id') == 'openbtn') {
            window.location.href = "opentickets.html", true;

        } else if ($(event.target).attr('id') == 'myticketbtn') {
            window.location.href = "mytickets.html", true;

        } else if ($(event.target).attr('id') == 'closed') {
            data = 'num=' + '4';
            var xmlhttp4 = new XMLHttpRequest();
            xmlhttp4.open("POST", "BugMe.php", true);
            xmlhttp4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp4.onreadystatechange = function() {
                if (this.readyState === 4 || this.status === 200) {
                    alert(this.responseText);

                }
            };
            xmlhttp4.send(data);
        } else if ($(event.target).attr('id') == 'progress') {
            data = 'num=' + '5';
            var xmlhttp5 = new XMLHttpRequest();
            xmlhttp5.open("POST", "BugMe.php", true);
            xmlhttp5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp5.onreadystatechange = function() {
                if (this.readyState === 4 || this.status === 200) {
                    alert(this.responseText);

                }
            };
            xmlhttp5.send(data);

        }
    });

    $("a.ticketissue").click(function() {
        alert("yes link clicked");
    });


});