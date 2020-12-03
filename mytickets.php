<?php
require ('BugMe.php');

$sql= "SELECT  title, type_,status_,assigned_to,created from issues WHERE created_by='%".$_SESSION['loginemail']."%'";
$result=  $conn->query($sql);
?>

 <table id="table">
 <tr class="th">
    <th >Title</th>
    <th >Type</th>
    <th >Status</th>
    <th >Assigned To</th>
    <th >created</th> 
</tr>
<?php foreach ($result as $row): ?>
<tr>
  <td > <a href="issueDetail.html" class="ticketissue"> <?= $row['title']; ?> </a></td>
  <td ><?= $row['type_']; ?></td>
  <td class="status"> <span class="statuscontent"> <?= $row['status_']; ?></span> </td>
  <td ><?= $row['assigned_to']; ?></td>
  <td ><?= $row['created']; ?></td>
</tr>
<?php endforeach; ?>
</table>
