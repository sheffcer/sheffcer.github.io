$(document).ready(function() {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".tab__content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

/*jquery - когда документа загрузился вызываем функцию замыкание
$(document).ready(function() {
//устанавливаем обработчик на елементы .tabs-menu a на событие нажатия
    $(".tabs-menu a").click(function(event) {
        //перехватываем выполнение события
        event.preventDefault();
        //$(this) - элемент, на который нажали, т.е. .tabs-menu a
        //берем родитель этого элемента, у нас это li в котором есть ссылка
        //и устанавливаем ему класс active
        $(this).parent().addClass("active");
        //у этого ж родителя (li) находим элементы, у которых общие родители
        //с помощью функции siblings - то есть остальные элементы li
        //и удаляем класс active
        $(this).parent().siblings().removeClass("active");
        //берем аттрибут ссылки href и записываем в переменную tab - там будет значение, например #tab-1
        var tab = $(this).attr("href"); */

//$(document).ready(function(){
var $firstName = $('#Firstname');
var $lastName = $('#Lastname');
var $adress = $('#Adress');
var $button = $('.btn-primary');

//  $("input").css("background-color", "lightgrey");
////    $('[data-toggle="tooltip"]').tooltip(); 
//

$firstName.hover(function(){
  $('.tooltips--visible1').css({
    opacity: 1,
    visibility:'visible',
    display: 'block'
 })}, 
  function() {$('.tooltips--visible1').css({
    opacity: 0,
    visibility:'hidden'
 })
});
  
$lastName.hover(function(){
  $('.tooltips--visible2').css({
    opacity: 1,
    visibility:'visible',
    display: 'block'
 })}, 
  function() {$('.tooltips--visible2').css({
    opacity: 0,
    visibility:'hidden'
 })
});
  
$adress.hover(function(){
  $('.tooltips--visible3').css({
    opacity: 1,
    visibility:'visible',
    display: 'block'
 })}, 
  function() {$('.tooltips--visible3').css({
    opacity: 0,
    visibility:'hidden'
 })
});

  $button.click(function(){
	 $('.tooltips--visible1').css({
    opacity: 1,
    visibility:'visible',
    display: 'block',
    });
	 $('.tooltips--visible2').css({
    opacity: 1,
    visibility:'visible',
    display: 'block',
    });
	 $('.tooltips--visible3').css({
    opacity: 1,
    visibility:'visible',
    display: 'block',
    });
  });
//$button.click(function(){
//	$('.tooltips--visible1').css({
//         opacity: 1,
//         visibility:'visible',
//         display: 'block'
//    });
// });

//});
