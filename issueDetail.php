<?php 
// require ('dashboard.php');


//        $_SESSION['title']= checkString($_POST['title']);

require ('connection.php');

if(isset($_POST['getdetails'])){
       $id =  $_POST['id'];
       $sqlrequest= "SELECT  * from issues where id='$id' ";
       $result =  $conn->query($sqlrequest);
       $data = $result->fetch(PDO::FETCH_ASSOC);
     
      
}


// $sqlDashboard= "SELECT  title, type_,status_,assigned_to,created from issues ";
// $result=  $conn->query($sqlDashboard);    

?>
<link rel="stylesheet" href="issueDetailStyle.css">
<h1 id="title"> <?= $data['title'];?> </h1>
<div class="box1">
    <p class="boxpara"><?= $data['description_'];?> </p>
    <div class="box">
        <div class="box2">
            <h4> Assign To </h4>
            <p><?= $data['assigned_to'];?> </p>
            <h4> Type </h4>
            <p><?= $data['type_'];?> </p>
            <h4> Priority </h4>
            <p><?= $data['priority_'];?> </p>
            <h4> Status </h4>
            <p><?= $data['status_'];?> </p>
        </div>
        <br> <br> <br>
        <form>
            <button type="button" id="closed">"Mark as Closed</button>
        </form>
        <form>
            <button type="button" id="progress">Mark in progress </button>
        </form>
    </div>

</div>