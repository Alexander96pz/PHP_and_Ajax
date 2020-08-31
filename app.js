$(function () {
    $('#search').keyup(function () {
        let search = $('#search').val();
        $.ajax({
            url: 'search_task.php',
            type: 'POST',
            data: { search },
            success: function (response) {
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(task => {
                    template += ` 
                    <tr>
                        <th scope="row">${task.id}</th>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                        <td>${task.created_at}</td>
                    `;
                });
                $('#contenedor_tabla').html(template);
            }
        })
    })
    // anadir task
    $('#form_task').submit(function(e) {
        e.preventDefault();         
        const data_task={
            title: $('#title').val(),
            description: $('#description').val()
        };
        $.post('task_add.php',data_task,function(resp){
            console.log(resp);// template
        });
        // console.log(data_task.title);
        // $.ajax({
        //     url: 'task_add.php',
        //     type: 'POST',
        //     data: { search },
        //     success: function (response) {
        //         console.log(response);
        //     }
        // })
    })

    $.ajax({
        url:'task_list.php',
        type: 'GET',
        success: function(e){
            let template='';
            let tasks=JSON.parse(e);//String a Json 
            tasks.forEach(task=>{
                template+=`
                <tr>
                        <th scope="row">${task.id}</th>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                        <td>${task.created_at}</td>
                `
            });
            $('#contenedor_tabla').html(template);
        }
    })

});