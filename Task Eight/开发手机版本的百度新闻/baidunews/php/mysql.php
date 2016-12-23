<!-- <?php
// phpinfo();


$con = mysqli_connect('localhost','root','','PHPlesson');//链接数据库
$con->query("SET NAMES utf8");//mysqli设置默认字符为utf8

if (!$con)
  {
  die('Could not connect:'.mysqli_error());
  }else{
  	echo "mysql ok";
  	$newstitle= $_REQUEST['newstitle'];
  	$newsimg= $_REQUEST['newsimg'];
  	$newscontent= $_REQUEST['newscontent'];
  	$addtime= $_REQUEST['addtime'];
  	mysqli_query($con,"INSERT INTO news (newstitle,newsimg,newscontent,addtime)
VALUES (".$newstitle.",".$newsimg.",".$newscontent.",".$addtime.")");

	  	$sql="SELECT newstitle,newsimg,newscontent,addtime FROM news ORDER BY newsid";
  	$result=mysqli_query($con,$sql);

  	$arr = array();
  	while($row=mysqli_fetch_array($result)){
  		array_push($arr,array("newstitle"=>$row['newstitle'],"newsimg"=>$row['newsimg']));
  	}
  	echo json_encode($arr);
  }


mysqli_set_charset($con,"utf-8");
mysqli_close($con);

?>
 -->






<?php

if(isset($_POST['name'])){
  echo "hello:".$_POST['name'];
}else{
  echo "Args Error";
}

?>