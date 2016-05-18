
'use strict';
var questions = [
  {
    question_title: 'Какое самое популярное домашнее животное?',
    answer: ['кот', 'медведь', 'лиса'],
    true_answer: [true, false,false]
  },
  
  {
    question_title: 'Какие звуки издает лиса?',
    answer: ['мяу', 'гав', 'никакие'],
    true_answer: [false, false, true]
  },
  
  {
    question_title: 'Где живут коты?',
    answer: ['нора', 'трава', 'гнездо'],
    true_answer: [false, false, true]
  },
  
  {
    question_title: 'Как друг друга узнают зебры?',
    answer: ['по гриве', 'никак', 'по полоскам', 'по запаху'],
    true_answer: [false, false, false, true]
  }
];

var JSON_Questions = JSON.stringify(questions); // упаковываем объект в строку

console.log(JSON_Questions);

localStorage.setItem('LS_questions', JSON_Questions); // записываем нашу строку в виде значени для ключа 'LS_questions'

var storeQuestions = localStorage.getItem('LS_questions'); // получем нашу строку и localStorage

storeQuestions = JSON.parse(storeQuestions); // преобразовываем нашу строку в объект

console.log(storeQuestions);

// ===========================test 1===============================================

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



// ========================== test2 =========================================
//$(function(){
// 
////  $(".fancybox").fancybox();
//  
//    var $myHover = $('h2').on('mouseover', function(){
//     $myHover.css({
//      'color':'red',
//      'transition': '2s',
//      'font-size':'26px',
//      'transition': '2s',
//      'font-size':'16px',
//     });
//    });
//  
//  var $myHover2 = $('h2').on('mouseout', function(){
//     $myHover2.css({
//      'color':'black',
//      'transition':'2s',
//      'font-size':'26px',
//      'transition': '2s',
//      'font-size':'16px',
//      });
//    });
//  
//  $('body').on('click', 'a[href^=\\/]', function(){
//    var url = $(this).attr('href');
//    $('body').load(url + ' body >* ');
//    return false;
//  });
//  
//  $('#menu ul li').hover(
//    function () {
//      $('ul:first', this).slideDown(300);  
//    },
//    function () {
//      $('ul:first', this).slideUp(200);
//    }
//   ); 
//  
//  $("select").selecter();
//  $(".fancybox").fancybox();
//  
//  
//});


// ============================ test3 ==================================


//var animal = {
//  name:'jack',
//  color: 'black',
//  age: 5
//};        
//
////var str = JSON.stringify(animal);
////
////console.log(str);
////
////var obj = JSON.parse(str);
////
////console.log(obj);
////console.log(obj.name, ',', obj.age, 'лет');
//
//
//
////console.log(JSON.stringify(animal));
//
//
//localStorage.setItem('myAnimal', JSON.stringify(animal));
//
//var test = localStorage.getItem('myAnimal');
//
//test = JSON.parse(test);
//console.log(test);


//'use strict';
//var questions = [
//  {
//    question_title: 'Какое самое популярное домашнее животное?',
//    answer: ['кот', 'медведь', 'лиса'],
//    true_answer: [true, false,false]
//  },
//  
//  {
//    question_title: 'Какие звуки издает лиса?',
//    answer: ['мяу', 'гав', 'никакие'],
//    true_answer: [false, false, true]
//  },
//  
//  {
//    question_title: 'Где живут коты?',
//    answer: ['нора', 'трава', 'гнездо'],
//    true_answer: [false, false, true]
//  },
//  
//  {
//    question_title: 'Как друг друга узнают зебры?',
//    answer: ['по гриве', 'никак', 'по полоскам', 'по запаху'],
//    true_answer: [false, false, false, true]
//  }
//];
//
//var JSON_Questions = JSON.stringify(questions); // упаковываем объект в строку
//
//console.log(JSON_Questions);
//
//localStorage.setItem('LS_questions', JSON_Questions); // записываем нашу строку в виде значени для ключа 'LS_questions'
//
//var storeQuestions = localStorage.getItem('LS_questions'); // получем нашу строку и localStorage
//
//storeQuestions = JSON.parse(storeQuestions); // преобразовываем нашу строку в объект
//
//console.log(storeQuestions);