// without sign plus/minus

$('.col15_answer').hide()
$('.col15_question').on('click',function(){
    ($(this).children('div').toggle());
})

//with sign plus/minus
<div class="about_section_tabs">
<div class="about_question">{{ block.settings.question }}<span>+</span></div>
<div class="about_answer">{{ block.settings.answer }}</div>
</div>
function customTabs(){
  $('.about_question').on('click',function(){
    $(this).find('span').toggleClass('active');
    if($('span.active').text() == '+'){
        $('span.active').text('-');
    }
    else{
        $('span').text('+');
    }
    $(this).parent().find('.about_answer').slideToggle(200);
  });
}
