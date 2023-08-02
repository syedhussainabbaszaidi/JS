  $('#mySelect').on('change',function(){
  var _this = $(this);
  let brandName = _this.val();
  $('.main_area>.m2>div').css('display','none');
  $(`.main_area>.m2>.${brandName}`).css('display','block');
  });
  
