<?php 
    include('backend.php');
    if (isset($_POST['title'])) {
        $title= $_POST['title'];
        $description= $_POST['description'];
        $query="INSERT INTO task(title,description) value ('$title','$description')";
        $result= mysqli_query($conn,$query);
        if (!$result) {
            die("falla en en la insercion");
        }else {
            echo "Save succerfully";
        }
    }
?>