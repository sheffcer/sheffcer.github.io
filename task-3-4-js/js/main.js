var form = document.createElement('form');
form.classList.add('navbar-form');
var parentElem = document.body;
//parentElem.insertBefore(form, parentElem.children[0]);
parentElem.appendChild(form);
var answerOne = 'Вариант ответа №1';
var answerTwo = 'Вариант ответа №2';
var answerThree = 'Вариант ответа №3';
var questionOne = '1. Вопрос №1';
var questionTwo = '2. Вопрос №2';
var questionThree = '3. Вопрос №3';

var testForm =  {
  Title: function() {
    var name = 'Тест по программированию';
    var pageTitle = document.createElement('h2'); 
    pageTitle.classList.add('text-center');
    pageTitle.innerHTML = name ;
    form.insertBefore(pageTitle, form.children[0]);
  },
  
  Question: function() {
    var  h4 = document.createElement('h4');
    h4.innerHTML = questionOne;
    form.appendChild(h4)
    testForm.Answers(answerOne)
  },
  
  Question2: function() {
    var  h4 = document.createElement('h4');
    h4.innerHTML = questionTwo;
    form.appendChild(h4)
    testForm.Answers(answerOne)
  },
  
  Question3: function() {
    var  h4 = document.createElement('h4');
    h4.innerHTML = questionThree;
    form.appendChild(h4);
    testForm.Answers(answerOne)
  },
  
  Answers: function(answerOne) {
    var fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    fieldset.appendChild(input);
    var label = document.createElement('label');
    label.innerHTML  = answerOne;
    label.setAttribute('for', 'number1');
    fieldset.appendChild(label);
    
    var br = document.createElement('br');
    fieldset.appendChild(br);
    
    var fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    fieldset.appendChild(input);
    var label = document.createElement('label');
    label.innerHTML  = answerTwo;
    label.setAttribute('for', 'number2');
    fieldset.appendChild(label);
    
    var br = document.createElement('br');
    fieldset.appendChild(br);
    
    var fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    fieldset.appendChild(input);
    var label = document.createElement('label');
    label.innerHTML  = answerThree;
    label.setAttribute('for', 'number2');
    fieldset.appendChild(label);
  }
}

testForm.Title();
testForm.Question();
testForm.Question2();
testForm.Question3();