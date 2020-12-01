<?php

session_start();
header('Access-Control-Allow-Origin: *');
$host = 'localhost';
$dbname = 'bugme';
$username = 'Group23Web';
$password = '2020Sem1';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);  //this statement is used to connect to the database
    echo "Connected to $dbname at $host successfully.";
    //$conn = null;
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}
 

 if($_SERVER['REQUEST_METHOD'] === 'POST'){
     if ($_POST['num']=='1'){
        $_SESSION['fname']= checkString($_POST['fname']);
        $_SESSION['lname']= checkString($_POST['lname']);
        $_SESSION['email']=validateEmail($_POST['email']);
        $_SESSION['password_']= password_hash($_POST['password'], PASSWORD_DEFAULT);
        

if ($_SESSION['fname']!=1 and $_SESSION['lname']!=1 and $_SESSION['email']!=1){
$query= "INSERT INTO users (firstname, lastname,email, user_password, date_joined) 
       VALUES ('".$_SESSION['fname']."', '".$_SESSION['lname']."', '".$_SESSION['email']."', '".$_SESSION['password_']."', NOW() )"  ;
        //$result=  $conn->query($query);
 $conn->exec($query);

}else{
    return "ERROR CREATING ACCOUNT, PLEASE TRY AGAIN";
}


}   elseif($_POST['num']=='2'){
  
        $_SESSION['loginemail']= $_POST['loginemail'];
        $_SESSION['loginpassword']= $_POST['password'];
        
        $query= "SELECT email, user_password FROM users "  ;
        $result=  $conn->query($query);
        
         foreach ($result as $row){
            
             if($_SESSION['loginemail']== $row['email'] ){
                 if ($_SESSION['loginpassword']==$row['user_password']){
                    //header('Location: file:///C:\Users\Donna\Desktop\info2180\info2180-finalproject/dashboard.html');
                   //exit;
                   echo '<html>';
                   echo '<script type="text/javascript">
                         window.location = "http://www.google.com/"
                         </script>';

                echo '</html>';
                 }else{
                     echo "Incorrect Password";
                     return 1;
                 }
                
            } 
        }  
        
    } elseif($_POST['num']=='3'){

        $_SESSION['assign']= checkString($_POST['assign']);
        $_SESSION['type_']= checkString($_POST['type']);
        $_SESSION['description_']= checkString($_POST['description']);
        $_SESSION['title']= checkString($_POST['title']);
        $_SESSION['priority_']=checkString($_POST['priority']);
        if ($_SESSION['assign']!=1 and $_SESSION['type']!=1 and $_SESSION['desciption']!=1 and $_SESSION['title']!=1 and $_SESSION['priority']!=1){
            $sql="INSERT INTO issues (title, description_, type_, priority_, status_, assigned_to, cratedby,created)

            VALUES ('".$_SESSION['title']."','".$_SESSION['description_']."', '".$_SESSION['type_']."','".$_SESSION['priority_']."',
            'OPEN','".$_SESSION['assign']."','".$_SESSION['fname']."',NOW()')";

        }
    }
}
$passwordHash= password_hash($password, PASSWORD_DEFAULT);

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