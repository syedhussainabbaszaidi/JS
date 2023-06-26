$(".desc ul").hide();
$("<a href='javascript:;' id='show_hide'>Read More</a>").insertAfter(".desc h2");
// $("<a href='javascript:;' id='show_hide'>Read More</a>").insertBefore(".desc h2");
$('#show_hide').on('click',function(){
    	 $(".desc ul").slideToggle(1000);
        if($(".desc ul").hasClass('opened')) {
            $(".desc ul").removeClass('opened');
            $("#show_hide").text('Read More');
        }
        else {
            $(".desc ul").addClass('opened');
            $("#show_hide").text('Read Less');
        }
});
