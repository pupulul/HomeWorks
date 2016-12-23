<?php 
require_once('config.php');

$con->query("SET NAMES utf8");//mysqli设置默认字符为utf8
if (!$con){
  die('Could not connect:'.mysqli_error());
  }else{

      $newsid=htmlspecialchars($_POST['newsid'],ENT_QUOTES);
      $sql="SELECT * FROM news WHERE newsid=$newsid";
  	  $result = mysqli_query($con,$sql);
      $senddata =array();

      while($row=mysqli_fetch_assoc($result)){
        array_push($senddata,array(
            'newsid'=>$row['newsid'],
            'newstitle'=>$row['newstitle'],
            'newsimg'=>$row['newsimg'],
            'addtime'=>$row['addtime'],
            'newscontent'=>$row['newscontent'],
            'class'=>$row['class']
          ));
      }



      echo json_encode($senddata);

  }
mysqli_close($con);

?>