let first_text = jQuery('.col6_inner>div:first-child>h3').clone();
jQuery('.col6_main>.emty').append(first_text);
$('.col6_box>h2').on('click',function(){
    let _this = $(this);
    first_text = _this.next('h3').clone();
    jQuery('.col6_main>.emty').empty().append(first_text);
})

// agr font text ka font-weight change krna hai click wala

let first_text = jQuery('.col6_inner>div:first-child>h3').clone();
jQuery('.col6_main>.emty').append(first_text);
$('.col6_box>h2').on('click',function(){
let _this = $(this);
$('.col6_box>h2').css("font-weight","400");
_this.css("font-weight","600");
first_text = _this.next('h3').clone();
jQuery('.col6_main>.emty').empty().append(first_text);
});
