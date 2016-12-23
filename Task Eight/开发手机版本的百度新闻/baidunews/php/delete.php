<?php 

require_once('config.php');

$con->query("SET NAMES utf8");//mysqli设置默认字符为utf8

if (!$con)
  {
  die('Could not connect:'.mysqli_error());
  }else{
  	$newsid=htmlspecialchars($_POST['newsid'],ENT_QUOTES);
  	$sql="DELETE FROM news WHERE newsid = '$newsid'";
  	 mysqli_query($con,$sql);
  }


echo json_encode(array('delete'=>$newsid));
mysqli_close($con);
 ?>