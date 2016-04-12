var app = {
    

    objs: [

     {
         el: "form",
         attr: [{type: "class",value: "navbar-form"}],

         children: [
             
             //название
             
             {
                 el: 'h2',
                 attr: [{type: "class",value: "text-center"}],
                 text: "Тест по программированию"
             }, 
             
             //вопрос 1
             
             {
                 el: 'h4',
                 text: "1. Вопрос №1"
             },
             
             //список полей для 1 вопроса
             {
                 el: 'fieldset',
                 children: [
                    //ответ 1
                     {
                         el: "input",
                         attr: [{type: "type",value: "checkbox"}],
                     },

                     {
                         el: "label",
                         attr: [{type: "for",value: "number1"}],
                         text: "Вариант ответа №1"
                     },
                     
                     {
                         el: "br"
                     },
                     
                     //ответ 2
                     
                     {
                         el: "input",
                         attr: [{type: "type",value: "checkbox"}],
                     },

                     {
                         el: "label",
                         attr: [{type: "for",value: "number2"}],
                         text: "Вариант ответа №2"
                     }, 
                     {
                         el: "br"
                     },
                     
                     
                      //ответ 3
                     
                     {
                         el: "input",
                         attr: [{type: "type",value: "checkbox"}],
                     },

                     {
                         el: "label",
                         attr: [{type: "for",value: "number3"}],
                         text: "Вариант ответа №3"
                     }, 
                  
                     
                     
                     
                     
                     
                 ]

             },
             
             
             //вопрос 2
              {
                 el: 'h4',
                 text: "2. Вопрос №2"
             },
             
             //список полей для 2 вопроса
             {
                 el: 'fieldset',
                 children: [
                    //ответ 1
                     {
                         el: "input",
                         attr: [{type: "type",value: "checkbox"}],
                     },

                     {
                         el: "label",
                         attr: [{type: "for",value: "number1"}],
                         text: "Вариант ответа №1"
                     },
                     
                     {
                         el: "br"
                     },
                     
                     //ответ 2
                     
                     {
                         el: "input",
                         attr: [{type: "type",value: "checkbox"}],
                     },

                     {
                         el: "label",
                         attr: [{type: "for",value: "number2"}],
                         text: "Вариант ответа №2"
                     }, 
                     {
                         el: "br"
                     },
                     
                     
                      //ответ 3
                     
                     {
                         el: "input",
                         attr: [{type: "type",value: "checkbox"}],
                     },

                     {
                         el: "label",
                         attr: [{type: "for",value: "number3"}],
                         text: "Вариант ответа №3"
                     }, 
                  
                     
                     
                     
                     
                     
                 ]

             },
             
             
             
             
             
             
             //кнопка отправки
             
              {
                 el: 'input',
                 attr: [{type: "type",value: "submit"},{type:"value",value:"Проверить мои результаты"},{type:"class",value:"btn btn-info btn-lg"}],

             },




         ]

     }


 ],
    
    
    create:function(type)
    {
        return document.createElement(type);
    },
    
    add:function(parent, child)
    {
        parent.appendChild(child);
    },
    
    
    deep: function(parent,node)
    {
         for(var j=0; j<node.children.length;j++)
            {
               if(node.children[j].el){
               var child = this.create(node.children[j].el);

                if(node.children[j].attr)
                    {
                    for(var at=0; at<node.children[j].attr.length;at++)
                        if(node.children[j].attr[at].type && node.children[j].attr[at].value)
                        child.setAttribute(node.children[j].attr[at].type,node.children[j].attr[at].value);
                    }
               
               
               child.innerHTML = (node.children[j].text)?node.children[j].text:"";
               if(node.children[j].children)
               {
                   child = this.deep(child,node.children[j]);
               }
               
               this.add(parent,child);
               }
            }
            
            return parent;
    },
    
    init: function()
    {
        
        var node;
        var child;
        
        for(var i=0; i<this.objs.length; i++)
        {
            if(this.objs[i].el){
            node = this.create(this.objs[i].el);
            if(this.objs[i].attr)
            {
            for(var at=0; at<this.objs[i].attr.length;at++)
                if(this.objs[i].attr[at].type && this.objs[i].attr[at].value)
                node.setAttribute(this.objs[i].attr[at].type,this.objs[i].attr[at].value);
            }
            node.innerHTML = (this.objs[i].text)?this.objs[i].text:"";
            
            
            node = this.deep(node,this.objs[i]);
            
           
            
            this.add(document.body,node);
            }
        }
        
    }
    
    
    
};


app.init();
//var form = document.createElement('form');
//form.classList.add('navbar-form');
//var parentElem = document.body;
////parentElem.insertBefore(form, parentElem.children[0]);
//parentElem.appendChild(form);
//var name = 'Тест по программированию'
//var answerOne = 'Вариант ответа №1';
//var answerTwo = 'Вариант ответа №2';
//var answerThree = 'Вариант ответа №3';
//var questionOne = '1. Вопрос №1';
//var questionTwo = '2. Вопрос №2';
//var questionThree = '3. Вопрос №3';
//var Button = 'Проверить мои результаты';
//
//var testForm =  {
//  Title: function() {
//    var h2 = document.createElement('h2'); 
//    h2.classList.add('text-center');
//    h2.innerHTML = name ;
//    form.insertBefore(h2, form.children[0]);
//  },
//  
//  Question: function() {
//    var  h4 = document.createElement('h4');
//    h4.innerHTML = questionOne;
//    form.appendChild(h4);
//    testForm.Answers(answerOne)
//  },
//  
//  Question2: function() {
//    var h4 = document.createElement('h4');
//    h4.innerHTML = questionTwo;
//    form.appendChild(h4)
//    testForm.Answers(answerOne)
//  },
//  
//  Question3: function() {
//    var  h4 = document.createElement('h4');
//    h4.innerHTML = questionThree;
//    form.appendChild(h4);
//    testForm.Answers(answerOne)
//  },
//  
//  Answers: function(answerOne) {
//    var fieldset = document.createElement('fieldset');
//    form.appendChild(fieldset);
//    var input = document.createElement('input');
//    input.setAttribute('type', 'checkbox');
//    fieldset.appendChild(input);
//    var label = document.createElement('label');
//    label.innerHTML  = answerOne;
//    label.setAttribute('for', 'number1');
//    fieldset.appendChild(label);
//    
//    var br = document.createElement('br');
//    fieldset.appendChild(br);
//    
//    var fieldset = document.createElement('fieldset');
//    form.appendChild(fieldset);
//    var input = document.createElement('input');
//    input.setAttribute('type', 'checkbox');
//    fieldset.appendChild(input);
//    var label = document.createElement('label');
//    label.innerHTML  = answerTwo;
//    label.setAttribute('for', 'number2');
//    fieldset.appendChild(label);
//    
//    var br = document.createElement('br');
//    fieldset.appendChild(br);
//    
//    var fieldset = document.createElement('fieldset');
//    form.appendChild(fieldset);
//    var input = document.createElement('input');
//    input.setAttribute('type', 'checkbox');
//    fieldset.appendChild(input);
//    var label = document.createElement('label');
//    label.innerHTML  = answerThree;
//    label.setAttribute('for', 'number2');
//    fieldset.appendChild(label);
//  },
//  
//  Button: function() {
//    var input = document.createElement('input');
//    input.setAttribute('type', 'submit');
//    input.setAttribute('value', 'Проверить мои результаты' );
//    input.classList.add('btn', 'btn-info', 'btn-lg');
//    form.appendChild(input)
//  }
//}
//
//testForm.Title();
//testForm.Question();
//testForm.Question2();
//testForm.Question3();
//testForm.Button();