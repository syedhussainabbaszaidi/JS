const get_url = window.location.href;
console.log(get_url);
setTimeout(function(){
  
  // if(get_url == "https://rogersoundlabs.myshopify.com/products/12s-grille"){
  if(get_url.indexOf("12s-grille") >= 0){
    console.log('find URL 12S');
    $('.custom-select__listbox').prepend('<li class="custom-select__option flex items-center js-option" ><span>Choose an Option</span> </li>');
    $('.custom-select__listbox').append('<li class="custom-select__option flex items-center js-option"><span>Speedwoofer 10S MKII</span> </li>');
    $('variant-picker .option-selector:first-child .custom-select__listbox li:nth-child(3)').on('click',function(){
      window.location.href = 'https://rogersoundlabs.myshopify.com/products/10s-grille';
    });
  }
  else if (get_url.indexOf("10s-grille") >= 0) {
    console.log('find URL 10S');
    $('.custom-select__listbox').prepend('<li class="custom-select__option flex items-center js-option" disabled> <span>Choose an Option</span> </li>');
    // $('.custom-select__listbox').append('<li class="custom-select__option flex items-center js-option"> <span>Speedwoofer 12S</span> </li>');
    $('.custom-select__listbox').append("<li class='custom-select__option flex items-center js-option'> <a href='{{ getvarianturl }}'><span>{{ getvariant }}</span></a> </li>");
    // $('variant-picker .option-selector:first-child .custom-select__listbox li:nth-child(3)').on('click',function(){
    //     window.location.href = 'https://rogersoundlabs.myshopify.com/products/12s-grille';
    // });
  }
  else{
    console.log('find Not URL')
  }
},100);
