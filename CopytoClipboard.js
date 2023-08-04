// saud code

jQuery('.reviews_shortcode').on('click', function(){
    // Select the text field
    jQuery(this).select();
    // Copy the text inside the text field
    navigator.clipboard.writeText(jQuery(this).text());
})

// hussain code

$('.col3>h2').on('click',function(){
   $(this).select();
   navigator.clipboard.writeText($(this).text());
});
