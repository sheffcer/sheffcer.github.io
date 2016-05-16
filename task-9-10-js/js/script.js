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
	
	var $element = $('.wrapper').parent();
	var $paragraph = $element.find('p');
	console.log($paragraph);
	console.log($element);
	
	$paragraph.addClass('red');
	
	
}); 