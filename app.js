$(function () {
    listTask();
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
                    <tr taskId="${task.id}">
                        <th scope="row">${task.id}</th>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                        <td>${task.created_at}</td>
                        <td> <button id="edit_task" class="btn btn-secondary"><i
                                class="fas fa-edit"></i></button></td>
                            <td> <button id="delete_task" class="btn btn-danger"><i
                                class="fas fa-trash-alt"></i></button></td>
                    `;
                });
                $('#contenedor_tabla').html(template);
            }
        })
    })
    // anadir task
    $('#form_task').submit(function (e) {
        e.preventDefault();
        const data_task = {
            title: $('#title').val(),
            description: $('#description').val()
        };
        $.post('task_add.php', data_task, function (resp) {
            listTask();
            $('#form_task').trigger('reset');
        });
    })

    function listTask() {
        $.ajax({
            url: 'task_list.php',
            type: 'GET',
            success: function (e) {
                let template = '';
                let tasks = JSON.parse(e);//String a Json 
                tasks.forEach(task => {
                    template += `
                    <tr taskId="${task.id}">
                            <th scope="row">${task.id}</th>
                            <td>${task.title}</td>
                            <td>${task.description}</td>
                            <td>${task.created_at}</td>
                            <td> <button id="edit_task" class="btn btn-secondary"><i
                                class="fas fa-edit"></i></button></td>
                            <td> <button id="delete_task" class="btn btn-danger"><i
                                class="fas fa-trash-alt"></i></button></td>
                    `
                });
                $('#contenedor_tabla').html(template);
            }
        })
    }

    $(document).on('click', '#delete_task', function (e) {
        if (confirm("Sure of the delete")) {
            let row = $(this)[0].parentElement.parentElement;
            let id = $(row).attr('taskId');
            $.ajax({
                url: 'task_delete.php',
                type: 'GET',
                data: { id },
                success: function (e) {
                    listTask();
                }
            })
        }
    });

});