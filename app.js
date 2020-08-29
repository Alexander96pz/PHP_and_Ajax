$(function(){
    $('#search').keyup(function(){
        let search=$('#search').val();
        console.log(search);
        $.ajax({
            url: 'search_task.php',
            type: 'POST',
            data: { search },
            success: function(response){
                console.log(response);
            }
        })
    })
});