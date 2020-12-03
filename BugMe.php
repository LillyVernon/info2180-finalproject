<?php

session_start();
header('Access-Control-Allow-Origin: *');
$host = 'localhost';
$dbname = 'bugme';
$username = 'Group23Web';
$password = '2020Sem1';
//$_SESSION['loginfirstname']="";
//$_SESSION['loginlastname']="";
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);  //this statement is used to connect to the database
    //echo "Connected to $dbname at $host successfully.";
    //$conn = null;
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}
 

 if($_SERVER['REQUEST_METHOD'] === 'POST'){
     // creates a new user
    // echo "data received";
     if ($_POST['num']=='1'){
        $_SESSION['fname']= checkString($_POST['fname']);
        $_SESSION['lname']= checkString($_POST['lname']);
        $_SESSION['email']=validateEmail($_POST['email']);
        $_SESSION['password_']= password_hash($_POST['password'], PASSWORD_DEFAULT);
        echo $_SESSION['fname'];
        echo $_SESSION['lname'];
       echo  $_SESSION['email'];
       echo $_SESSION['password_'];

    if ($_SESSION['fname']!=1 and $_SESSION['lname']!=1 and $_SESSION['email']!=1){
        $query= "INSERT INTO users (firstname, lastname,email, user_password, date_joined ) 
       VALUES ('".$_SESSION['fname']."', '".$_SESSION['lname']."', '".$_SESSION['email']."', '".$_SESSION['password_']."', NOW() )"  ;
        //$result=  $conn->query($query);
        $conn->exec($query);
        echo "User created";

    }else{
        return "ERROR CREATING ACCOUNT, PLEASE TRY AGAIN";
            }


}   elseif($_POST['num']=='2'){
    // login the user
        $_SESSION['loginemail']= $_POST['loginemail'];
        $_SESSION['loginpassword']= $_POST['password'];
        
        $query= "SELECT email, user_password, firstname,lastname FROM users "  ;
        
        $result=  $conn->query($query);

         foreach ($result as $row){
            
             if($_SESSION['loginemail']== $row['email'] ){

                 if (password_verify($_SESSION['loginpassword'], $row['user_password'])){
                    //header('Location: file:///C:\Users\Donna\Desktop\info2180\info2180-finalproject/dashboard.html');
                   //exit; 
                   $_SESSION['loginfirstname']=$row['firstname'];
                   $_SESSION['loginlastname']=$row['lastname'];
                echo "True";
                //return require ('assign.php');
                 }else{
                     echo "Incorrect Password";
                     return 1;
                 }
                
            } 
        }  
        
    } elseif($_POST['num']=='3'){
        // creating an issue
   
   
        $_SESSION['assign']= checkString($_POST['assign']);
        $_SESSION['type_']= checkString($_POST['type']);
        $_SESSION['description_']= checkString($_POST['description']);
        $_SESSION['title']= checkString($_POST['title']);
        $_SESSION['priority_']=checkString($_POST['priority']);
        $_SESSION['fullname']=$_SESSION['loginfirstname']." ". $_SESSION['loginlastname'];
        echo $_SESSION['fullname'];
        if ($_SESSION['assign']!=1 and $_SESSION['type_']!=1 and $_SESSION['description_']!=1 and $_SESSION['title']!=1 and 
        $_SESSION['priority_']!=1){
            
            $sql="INSERT INTO issues (title, description_, type_, priority_, status_, assigned_to, created_by,created,updated)

            VALUES (
            '".$_SESSION['title']."',
            '".$_SESSION['description_']."', 
            '".$_SESSION['type_']."',
            '".$_SESSION['priority_']."',
            'OPEN',
            '".$_SESSION['assign']."',
            '".$_SESSION['fullname']."',
            NOW(),
            NOW())";
             $conn->exec($sql);
 echo "issue created";
        }
    }
}
//$passwordHash= password_hash($password, PASSWORD_DEFAULT);

 function validateEmail($x){
    if (!filter_var($x, FILTER_VALIDATE_EMAIL)) {
   echo("Email is not valid");
   return 1;
   } else {
     return $x;
   }}

function checkEmpty($x){
    if (empty($x)) {
       echo "Field is empty";
       return 1;
        } else {
         return $x;
        }
}
function checkString($x){
    if (!filter_var($x, FILTER_SANITIZE_STRING)) {
      return ("error with string");
      return 1;
       } else {
          return $x;
       }
    } 

?>