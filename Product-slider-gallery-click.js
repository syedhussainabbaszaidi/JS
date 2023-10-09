//product slider click k lye media par
$('.product-gallery__thumbnail-list > .product-gallery__thumbnail:nth-child(1)').addClass('is-active');
$('.custom_arrow > .next').on('click',function(){
   $('.product-gallery__thumbnail-list > .product-gallery__thumbnail.is-active').next('button').addClass('is-active').prev('button').removeClass('is-active');
});
