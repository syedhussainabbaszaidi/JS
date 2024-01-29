jQuery("div#mapbase svg g path").attr('vector-effect','')
jQuery("div#mapbase svg g path").mouseenter(function(){
  let child = jQuery(this).index() + 1;
  console.log(child);
  jQuery("div#mapbase svg g path").removeClass('selected')
  jQuery(this).addClass('selected');
  jQuery("div#mapbase svg g > text").removeClass('selected');
  jQuery("div#mapbase svg g > text:nth-child(" + child + ")").addClass('selected');
});

jQuery("div#mapbase svg g path").mouseleave(function(){
  let child = jQuery(this).index() + 1;
  console.log(child);
  jQuery("div#mapbase svg g path").removeClass('selected')
  jQuery(this).removeClass('selected');
  jQuery("div#mapbase svg g > text").removeClass('selected');
  jQuery("div#mapbase svg g > text:nth-child(" + child + ")").removeClass('selected');
});

