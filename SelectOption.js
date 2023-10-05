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


// select option add yarishnala

$(document).ready(function() {
$(".select__select").change(function(){
    var a = $(this).find('option:selected');
    $(this).find('option').removeAttr('selected');
    a.attr('selected','selected');
    console.log(a);
});
});
