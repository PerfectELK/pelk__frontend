
var random_place__word_generate = function(){

    let wordArr = [
        'tar -xvf \'path\'','tar -cvzf \'arch_name\' \'path\'',
        'Владосиус, заходи, заебал',
        'ssh -p \'username\'@\'ip or domain\'',
        'mysql -u \'user\' -p \'db_name\' < \'sql_dump\'',
        'mysqldump -u \'user\' -p  \'db_name\' > \'path\''
    ];// Потом буду получать с сервера

    var phrase = wordArr[Math.floor(Math.random() * wordArr.length)];

    var width = Math.floor(Math.random() * window.innerWidth);
    var height = Math.floor(Math.random() * window.innerHeight);
    var rotate = Math.floor(Math.random() * 30) - 15;
    var elem = $(document.createElement('div')).addClass('rand_phrase');
    elem.css({'top':`${height}px`,'left':`${width}px`, 'transform' : `rotate(${rotate}deg)`});
    elem.html(phrase);
    $(document.body).append(elem);

    setTimeout(function(){
        elem.addClass('visible');
        setTimeout(function(){
            elem.removeClass('visible');
            setTimeout(function(){
                elem.remove();
            },2000);
        },4000);
    },400);


}

    setInterval(function(){
       new random_place__word_generate()
    },2000);