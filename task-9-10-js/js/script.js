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
	
	var $element = $('.wrapper');
	var $link = $element.find('a');
//	console.log($paragraph);
//	console.log($element);
	
//	$link.addClass('red');
	$link.css({
		'background':'lightgrey',
		'font-size':'18px',
//		'cursor': 'pointer'
	});
	
	$link.attr('href', 'http://colorway.com/ru_CW');
	$link.attr('target', '_blank');
	
//	var $wrapper = $('.wrapper');
//	$wrapper.removeClass('wrapper');
	
}); 