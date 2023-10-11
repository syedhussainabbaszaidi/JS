// karat wale pr kya tha 1 div jo k this banai phr dsri get ki

$('.col3_box_1 > .col3_slide:not(:first-child)').hide();
$('.col3_bottom > h6').on('click',function(){
	let child = ($(this).index()) + 1;
	$(this).parent().find('h6').removeClass('active');
	$(this).addClass('active');
	$('.col3_box.col3_box_1>div').hide();
	$('.col3_box.col3_box_1>div:nth-child('+child+')').show();
});
