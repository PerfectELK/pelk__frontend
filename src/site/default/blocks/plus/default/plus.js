(function($){

    $('.plus-block__elem').on('click',function(e){
        var plus = $(this);
        if(plus.data('open')){
            e.stopPropagation();
            var open_cls = '.' + plus.data('open');
            $(open_cls).toggleClass('hide');
        }
    })

}(jQuery));