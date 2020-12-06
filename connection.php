<?php header('Access-Control-Allow-Origin: *'); 

    $host = 'localhost';
    $dbname = 'bugme';
    $username = 'root';
    $password = '';


try {
 
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
  // if($conn){
  //   echo 'connected';
  // }else{
  //   echo 'Not connected to the database';
  // }
  } catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
  }
  
  // $conn = null;
  
?>