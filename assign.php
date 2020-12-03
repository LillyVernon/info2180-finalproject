<?php
include_once('BugMe.php');

$sql= "SELECT  firstname, lastname from users ";
$result=  $conn->query($sql);
?>


<?php foreach ($result as $row): ?>
  <option id="assign"><?= $row['firstname'];?> <?= $row['lastname']; ?></option>
<?php endforeach; ?>

