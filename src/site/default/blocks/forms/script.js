$(document).ready(function () {

    $('.form__validation').validationEngine('attach', {
        promptPosition : "topLeft",
        scroll: false
    });

    $(".form__validation")
        .on('submit', function (event) {
        event.preventDefault();
    })
        .on('jqv.form.result', function (event, errorFound) {
            event.preventDefault();
            if(!errorFound){//Это надо изменить, когда буду натягивать на бэк
                window.location.href = event.target.getAttribute('action');
            }
        });


    var forms = $('.pelk__form');
    for(var i = 0; i < forms.length; i++){
        var form_item = $(forms.get(i));
        var func = form_item.data('form');
        window[func](form_item);
    }

});

