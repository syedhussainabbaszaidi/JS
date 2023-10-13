// click this add class

$('.col1_box_1_main .col1_box_1').hide();
$('.col1_box_icons span').on('click',function(){
let child = $(this).index() + 1;
console.log(child);
$(this).parent().find("span").removeClass('active');
$(this).addClass('active');
$('.col1_box_1_main > div').hide();
$('.col1_box_1_main>div:nth-child('+child+')').show();
$('.col1_text').hide();
});  

// click this add class karat website education page click show or hide div

$('.col1_box_1_main .col1_box_1').hide();
      $('.col1_box_icons span').on('click',function(){
      let child = $(this).index() + 1;
      if($(this).hasClass('active')){
      $(this).parent().find("span").removeClass('active');
      $('.col1_box_1_main > div').hide();
      $('.col1_text').show();
      }
      else {
      $(this).parent().find("span").removeClass('active');
      $(this).addClass('active');
      $('.col1_box_1_main > div').hide();
      $('.col1_box_1_main>div:nth-child('+child+')').show();
      $('.col1_text').hide();
      }
      });
