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
  }
]

var JSON_Questions = JSON.stringify(questions); // упаковываем объект в строку

console.log(JSON_Questions);

localStorage.setItem('LS_questions', JSON_Questions); // записываем нашу строку в виде значени для ключа 'LS_questions'

var storeQuestions = localStorage.getItem('LS_questions'); // получем нашу строку и localStorage

storeQuestions = JSON.parse(storeQuestions); // преобразовываем нашу строку в объект

console.log(storeQuestions);