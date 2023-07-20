$('.col14_bottom>div').each(function (i,v) {
    if(i<3){
        $(v).addClass('pro_show');
    }
});

$('.show_more').on('click', function () {
    let child_len = $('.col14_bottom>div.pro_show').length + 3;
    $('.col14_bottom>div').removeClass('pro_show');
    $('.col14_bottom>div').each(function (i,v) {
        if(i<child_len){
            $(v).addClass('pro_show');
        }
    });
});
