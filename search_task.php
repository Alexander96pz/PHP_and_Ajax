<?php 
    include('backend.php');
    if (!empty($_POST['search'])) {
        $search=$_POST['search'];
        $query="SELECT * FROM task WHERE title LIKE '$search%'";
        $result=mysqli_query($conn,$query);
        if(!$result){
            die('query fallido'.mysqli_error($conn));
        }else{
            // $json=array();
            while($row=mysqli_fetch_array($result)){
                $json[]=array(
                    'id' => $row['id'],
                    'title' => $row['title'],
                    'description' => $row['description'],
                    'created_at' => $row['created_at']
                );
            }
            $jsonObj=json_encode($json);
            echo $jsonObj;
        }
    }
?>