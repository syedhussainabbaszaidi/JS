
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
