$('#sendMail').on("click", function(){
    var email = $('#email').val().trim(); // удаляем лишние пробелы с помощью trim
    var name = $('#name').val().trim();
    var phone = $('#phone').val().trim();
    var message = $('#message').val().trim();

    if(email == ""){
        $('#errorMes').text('Введите email');
        return false;
    } else if(name == ""){
        $('#errorMes').text('Введите имя');
        return false;
    }else if(phone == ""){
        $('#errorMes').text('Введите телефон');
        return false;
    }else if(message.length < 5){
        $('#errorMes').text('Сообщение должно быть больше 5 символов!');
        return false;
    }

    $('#errorMes').text("");

    $.ajax({
        url: 'ajax/mail.php', // страница на которую передаем все данные и от которой получаем какой то ответ
        type: 'POST', // тип передачи данных get или post
        cache: false, // кеширование
        data: { 'email': email, 'name': name, 'phone': phone, 'message': message }, // данные которые передаются в файл url (имя - значение)
        dataType: 'html', // тип передаваемых данных
        beforeSend: function () { // параметр вызывает функцию до того как мы получим ответ с файла
            $('#sendMail').prop("disabled", true); // блокируем кнопку пока все загружается
        },
        success: function (result) { // получили данные, завершенный цикл операции
            if(!result){
                alert('Ошибка! Сообщение не отправлено!');
            } else {
                alert("Сообщение отправлено! :)");
                $('#mailForm').trigger("reset"); // очищаем форму
            }
            $('#sendMail').prop("disabled", false); //разблокируем кнопку
        }
    });

});