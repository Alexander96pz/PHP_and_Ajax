<?php 
    include('backend.php');
    $query="SELECT * FROM task";
    $result=mysqli_query($conn,$query);
    if (!$result) {
        die("Fallo de conexion");
    }else{
        while($row=mysqli_fetch_array($result)){
            $json[] = array(
                'id' => $row['id'],
                'title' => $row['title'],
                'description' => $row['description'],
                'created_at' => $row['created_at']
            );
        }
        // array a format JSON object// example {"Peter":35,"Ben":37,"Joe":43}
        $jsonObj= json_encode($json);//JsonObj es un String con format json
        echo $jsonObj;
    }
?>