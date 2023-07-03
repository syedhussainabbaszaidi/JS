let start_function = setInterval(() => {
  if($("label[for='recurpay__subscribe_radio']").find('.recurpay__group_title>div').length){
    $("label[for='recurpay__subscribe_radio']").find('.recurpay__group_title>div').text('Subscribe & Save');
  clearInterval(start_function);
  }},1)
