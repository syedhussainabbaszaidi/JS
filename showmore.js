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



// ye code kya https://syedhussainabbaszaidi.github.io/

$('.col3_main>div').each(function(i,v){
  if(i<12){
      $(v).addClass('portfolio_show');
  } 
});

$('.col3_btn>a').on('click',function(){
  let child_length = $('.col3_main>.portfolio_show').length + 4;
  console.log(child_length);
  $('.col3_main>div').removeClass('portfolio_show');
  $('.col3_main>div').each(function(i,v){
      if(i<child_length){
        $(v).addClass('portfolio_show');
      }
  });
});

// style.css

.col3_box {
    position: relative;
    display: none;
    width: 22%;
    transition: .4s;
}

.portfolio_show{
    display: block;
}
