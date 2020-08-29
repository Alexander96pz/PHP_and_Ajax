$(function () {
    $('#search').keyup(function () {
        let search = $('#search').val();
        // console.log(search);
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
});