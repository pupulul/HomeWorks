<?php 
require_once('config.php');

$con->query("SET NAMES utf8");//mysqli设置默认字符为utf8
if (!$con){
  die('Could not connect:'.mysqli_error());
  }else{
    // 回传是json，如果echo了其他东西，虽然会成功，但是显示结果会报错。
    // echo "insert Ok";
    // 如果没有输入数据会有undefined index错误提示，加上@即可阻止该提示。
    $newsid=htmlspecialchars($_POST['newsid'],ENT_QUOTES);
   $newstitle = htmlspecialchars($_POST['newstitle'],ENT_QUOTES);
    $newsimg=htmlspecialchars($_POST['newsimg'],ENT_QUOTES);
    $newscontent=htmlspecialchars($_POST['newscontent'],ENT_QUOTES);
    $addtime=htmlspecialchars($_POST['addtime'],ENT_QUOTES);
    $class=htmlspecialchars($_POST['class'],ENT_QUOTES);

    //  
    $sql="UPDATE news SET newstitle='$newstitle',newsimg='$newsimg',newscontent='$newscontent',addtime='$addtime',class='$class' WHERE newsid = '$newsid'";

    mysqli_query($con,$sql);
    echo json_encode(array('success'=>'ok'));

  }
mysqli_close($con);

?>