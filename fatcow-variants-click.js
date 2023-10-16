<div id="custom_qty">
<div class="quantity_heading">Quantity</div>
<label class="box_qty active" data-discount="1">
  <span>1</span>
  <input type="radio" name="custom_qty" value="1" checked="checked">
</label>
<label class="box_qty"  data-discount="2">
  <span>2</span>
  <img src="https://cdn.shopify.com/s/files/1/0619/7752/6429/files/10_percent.png?v=1684244498">
  <input type="radio" name="custom_qty" value="2">
</label>
<label class="box_qty" data-discount="3">
  <span>3</span>
  <img src="https://cdn.shopify.com/s/files/1/0619/7752/6429/files/15_percent.png?v=1684244498">
  <input type="radio" name="custom_qty" value="3">
</label>
<!--                 <label class="box_qty">
  <span>4</span>
  <img src="https://cdn.shopify.com/s/files/1/0619/7752/6429/files/40.png?v=1682581634">
  <input type="radio" name="custom_qty" value="4">
</label> -->
</div>
// quantity change horhi or price pr change horhi hen click k throw  data-price add karai h liquid k throw
$('#custom_qty input').on('change', function () {
  $('.quantity__input>option').removeAttr('selected')
  $('.quantity__input>option:nth-child('+$(this).val()+')').attr('selected', 'selected');
});

$(document).on('click', '.box_qty', function(){
  $(this).parent().find('.box_qty').removeClass('active');
  $(this).addClass('active');

  if($(this).data('discount') == 2) {
    let a = $('.main_varaints>.variant-option.active').attr('data-price');
    console.log(a);
    a = a.trim();
    a = parseFloat(a.replace('£','')).toFixed(2);
    var b = "£"+(a-(a*0.10));
    $('.price__regular .price-item.price-item--regular').text(b);
  }
  else if($(this).data('discount') == 3) {
    let a = $('.main_varaints>.variant-option.active').attr('data-price');
    console.log(a);
    a = a.trim();
    a = parseFloat(a.replace('£','')).toFixed(2);
    var b = "£"+(a-(a*0.15)).toFixed(2);
    $('.price__regular .price-item.price-item--regular').text(b);
  }
  else {
    let a = $('.main_varaints>.variant-option.active').attr('data-price');
    $('.price__regular .price-item.price-item--regular').text("£"+a);
  }
  
});

// quantity par click horha hai or price discount laga rhe

$(window).load(function(){
    var orignal_price = $('.price__regular .price-item.price-item--regular').text();
    console.log("price : "+orignal_price);
     $('#custom_qty .box_qty:nth-child(2)').on('click',function(){
      $('.price__regular .price-item.price-item--regular').text(orignal_price);
      //console.log("This value of orignal_price :" + orignal_price);
      });
      $('#custom_qty .box_qty:nth-child(3)').on('click',function(){
      var a = orignal_price;
      a = a.trim();
      a = parseFloat(a.replace('£','')).toFixed(2);
      //console.log("This value of a :" + a);
      var b = "£"+(a-(a*0.10));
      //console.log("This value of b :" + b);
      $('.price__regular .price-item.price-item--regular').text(b);
      //console.log("This value of orignal_price :" + orignal_price);
      });
      $('#custom_qty .box_qty:nth-child(4)').on('click',function(){
      var a = orignal_price;
      a = a.trim();
      a = parseFloat(a.replace('£','')).toFixed(2);
      //console.log("This value of a :" + a);
      var b = "£"+(a-(a*0.15).toFixed(2));
      //console.log("This value of b :" + b);
      $('.price__regular .price-item.price-item--regular').text(b);
      //console.log("This value of orignal_price :" + orignal_price);
      });
});


// two select option hai or 1 div pr click horha hai

$('.variant-option').on('click', function () {
  let _this = $(this);
  let scent = _this.data('scent');
   let size = _this.data('size');
  _this.parent().find('.variant-option').removeClass('active');
  _this.addClass('active');
  
  $('.select__select option').removeAttr('selected');
  $('.select__select option').each(function (i,v) {
       if($(v).val() == scent) {
           $(v).attr('selected', 'selected');
          // Select the option you want to trigger the change event on
           let selectedOption = $(v).parent();
          // console.log($(v), selectedOption);
           // Trigger the change event on the selected option
          selectedOption.trigger("change");
       }
       if($(v).val() == size) {
           $(v).attr('selected', 'selected');
      }
   });
 });

// two radio input hai or 1 div pr click horha hai

$('.variant-option').on('click', function () {
  let _this = $(this);
  let scent = _this.data('scent');
  let size = _this.data('size');
  _this.parent().find('.variant-option').removeClass('active');
  _this.addClass('active');
  $('variant-radios>fieldset>input[type="radio"]').prop('checked', false);
  $('variant-radios>fieldset>input[type="radio"]').each(function (i,v) {
      if($(v).val() == scent) {
          $(v).click();

      }
      if($(v).val() == size) {
          $(v).click();
      }
  });
});
