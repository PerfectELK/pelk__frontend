(function($){
    var icons = document.querySelectorAll('.icon');
    var menu = document.getElementsByClassName('menu-block')[0];
    icons.forEach (function(icon){
        icon.addEventListener('click', function(event){
            icon.classList.toggle("open");
            menu.classList.toggle("active");
            if(menu.classList.contains('active')){
                document.body.style['overflow-y'] = 'hidden';
            }else{
                document.body.style['overflow-y'] = 'auto';
            }
        });
    });
}(jQuery));
