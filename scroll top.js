$('body footer').append("<a href='javascript:;' id='top'>Top</a>");

$("#top").on('click', function(){
    $("html, body").animate({
        scrollTop: $("body").offset().top - 120
    }, 1500);
})
