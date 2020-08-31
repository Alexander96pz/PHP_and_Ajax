<?php 
    include('backend.php');
    if (isset($_GET['id'])) {
        $id=$_GET['id'];
        $query="DELETE from task WHERE id={$id}";
        $result= mysqli_query($conn,$query);# code...
        if(!$result){
            die("Delete Fallida");
        }else{
            echo "Delete Succerfull";
        }
    }
?>