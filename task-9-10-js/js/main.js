//$(document).ready(function() {
//	 $(".fancybox").fancybox();
//});
//
//$(document).ready(function() {
//  $("select").selecter();
//});
//
//$(document).ready(function () {   
//
//    $('#menu ul li').hover(
//        function () {
//            $('ul:first', this).slideDown(300);  
//        },
//        function () {
//            $('ul:first', this).slideUp(200);
//        }
//    ); 
//	
//});
//
//$(function(){
//$("h2").css("color", "red");
//});

$(function(){
 
//  $(".fancybox").fancybox();
  
    var $myHover = $('h2').on('mouseover', function(){
     $myHover.css({
     'color':'red',
      'transition': '2s',
      'font-size':'26px',
      'transition': '2s',
      'font-size':'16px',
     });
    });
  
  var $myHover2 = $('h2').on('mouseout', function(){
     $myHover2.css({
     'color':'black',
      'transition': '2s',
      'font-size':'26px',
      'transition': '2s',
      'font-size':'16px',
      });
    });
  
  $('body').on('click', 'a[href^=\\/]', function(){
    var url = $(this).attr('href');
    $('body').load(url + ' body >* ');
    return false;
  });
  
  $('#menu ul li').hover(
    function () {
      $('ul:first', this).slideDown(300);  
    },
    function () {
      $('ul:first', this).slideUp(200);
    }
   ); 
  
  $("select").selecter();
  $(".fancybox").fancybox();
  
  
});



