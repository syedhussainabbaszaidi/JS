  $('#mySelect').on('change',function(){
  var _this = $(this);
  let brandName = _this.val();
  $('.main_area>.m2>div').css('display','none');
  $(`.main_area>.m2>.${brandName}`).css('display','block');
  });
  
// select k option click pr class add

$('#mySelect').on('change',function(){
    var selectedvalue = $("option:selected" , this).addClass("intro");
    console.log(selectedvalue);
});
