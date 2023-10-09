//catalyst product slider click k lye media par
$('.product-gallery__thumbnail-list > .product-gallery__thumbnail:nth-child(1)').addClass('is-active');
$('.custom_arrow > .next').on('click',function(){
   $('.product-gallery__thumbnail-list > .product-gallery__thumbnail.is-active').next('button').addClass('is-active').prev('button').removeClass('is-active');
});


// saud code karbon is proper work
$('h2.next').on('click', function () {
let index = $('page-dots.product-gallery__thumbnail-list>button[aria-current="true"]').index();
num = index + 2;
$('page-dots.product-gallery__thumbnail-list>button:nth-child('+num+')').click();
});

$('h2.prev').on('click', function () {
    let index = $('page-dots.product-gallery__thumbnail-list>button[aria-current="true"]').index();
    $('page-dots.product-gallery__thumbnail-list>button:nth-child('+index+')').click();
});

// Hussain code karbon is not proper work
$('.custom_arrow > .next').on('click',function(){
   $('.product-gallery__thumbnail-list > .product-gallery__thumbnail[aria-current="true"]').next('button').attr('aria-current','true').prev('button').attr('aria-current','false');
});
