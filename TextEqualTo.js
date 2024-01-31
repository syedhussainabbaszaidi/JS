// TextEqualTo 
  
let get_span_text = $(this).parents('.cg3m-product-grid-section').siblings('.second-separator').eq(0).find('span');
    if($(get_span_text).text() == 'AWARD WINNING SPEEDWOOFER 12S MKII'){
        $(get_span_text).text('AWARD WINNING SPEEDWOOFER 10S MKII')
    }else{
        $(get_span_text).text('AWARD WINNING SPEEDWOOFER 12S MKII')
    }
});
