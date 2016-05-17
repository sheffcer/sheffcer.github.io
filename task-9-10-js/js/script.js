// jQuery | $

//console.log(jQuery);
//console.log ($);

document.addEventListener('DOMContentLoaded', function() {
	console.log('DOMContentLoaded');
});

// document.querySelectorAll()
//$(document).ready(function() {
//// Sizzle движок поиска элементов
//	var element = $('.wrapper');
//	
//	console.log(element);
//	
//	
//});

$(function(){
	
//	var $link = $('.wrapper a');
//	var $link = $element.find('a');
//	console.log($paragraph);
//	console.log($element);
	
//	$link.addClass('red');
	
	
//	var $wrapper = $('.wrapper');
//	$wrapper.removeClass('wrapper');
  
//  $('.wrapper').append('<div>test</test>');
  $('.wrapper').append('<a>fjdkfjkfjdkfjdkfj</a>');
  
	var $link = $('.wrapper a');
  // Chahining цепочка вызовов
  $link
    .css({
		 'background':'lightgrey',
		 'font-size':'18px',
     'padding':'10px;',
     'margin-top':'20px'
//		'cursor': 'pointer'
	})
	
	  .attr('href', 'http://colorway.com/ru_CW')
	  .attr('target', '_blank');
  
//  $link.on('click', function(){
//    alert('мазафака!');
//  })
  
  $link.hover(
   function() {
     $(this).hide();
   },
  function() {
//    $(this).show();
  }
  )
  
  
}); 