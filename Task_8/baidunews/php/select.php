<?php 

require_once('config.php');


$con->query("SET NAMES utf8");//mysqli设置默认字符为utf8
if (!$con)
  {
  die('Could not connect:'.mysqli_error());
  }else{
  	// 每次运行只会读取一条，如有多条数据，需要运行多次，可以使用循环来解决。
    $class=$_POST['class'];
    $sql="SELECT * FROM news WHERE class='$class'";
    if($class=="推荐"){ 
      $result = mysqli_query($con,"SELECT * FROM news");
    }else{
      $result=mysqli_query($con,$sql);
    }


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
	
  // 	// 查询总共有多少条数据；
  // 	$row_cnt = $result->num_rows;

  	// for($i=0;$i<$row_cnt;$i++){
  // 		// assoc是键值对形式，array是键值对和数字标都有
  // 		// 将所有数据添加入数组news
		// $news[] = mysqli_fetch_assoc($result);
  	// }
  }

mysqli_close($con);
?>

