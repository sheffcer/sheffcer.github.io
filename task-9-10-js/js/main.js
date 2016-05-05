$(document).ready(function() {
	 $(".fancybox").fancybox();
});

$(document).ready(function() {
  $("select").selecter();
});

$(document).ready(function () {   

    $('#menu ul li').hover(
        function () {
            $('ul:first', this).slideDown(300);  
        },
        function () {
            $('ul:first', this).slideUp(200);
        }
    ); 
	
});

