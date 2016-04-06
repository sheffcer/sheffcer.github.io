var form = document.createElement('form');
form.classList.add('navbar-form');
var parentElem = document.body;
//parentElem.insertBefore(form, parentElem.children[0]);
parentElem.appendChild(form);

var testForm =  {
  Title: function() {
    var name = 'Тест по программированию';
    var pageTitle = document.createElement('h2'); 
    pageTitle.classList.add('text-center');
    pageTitle.innerHTML = name ;
    form.insertBefore(pageTitle, form.children[0]);
  }
}

testForm.Title(name);