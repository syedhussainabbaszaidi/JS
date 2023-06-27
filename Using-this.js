$('.col3_box_1 h3').hide();
$('.col3_box_1>h2').on('click',function(){
var _this = $(this);
if(_this.next('h3').hasClass('active')) {
$('.col3_box_1 h3').removeClass('active').slideUp(1000);
_this.next('h3').addClass('active').slideDown(1000);
}
else {
$('.col3_box_1 h3').removeClass('active').slideUp(1000);
_this.next('h3').addClass('active').slideDown(1000);
}
});
