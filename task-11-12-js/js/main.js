$(function() {
  
//  var html = $('#test').html();
//  
//  var articles = [
//    {
//      title: 'Article 1',
//      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!'
//    },
//    
//    {
//      title: 'Article 2',
//      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!'
//    },
//    
//    {
//      title: 'Article 3',
//      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!'
//    }
//  ]
//      
//  var content = tmpl(html, {
//    data: articles
//  });
//  
//  $('body').append(content);
  
  
 var html = $('#test').html();
  
  var articles = [
    {
      title: 'Шевко Александр Владимирович',
      content: ['http://sheffcer.github.io/task-1_2/img/me.jpg']
    },
    
    {
      title: 'Администратор бд',
      content: []
    },
    
    {
      title: 'Хочу учить фронтенду потому что:',
      content: ['Круто', 'Интересно', 'Востребовано']
    },
    
    {
      title: 'Контакты',
      content: ['телефон: 050-442-2623', 'skype: sheffcer', 'почта: a.sheffcer@gmail.com']
    },
    
    {
      title: 'Хобби',
      content: ['фото', 'коты', 'туризм']
    }
  ]
      
  var content = tmpl(html, {
    data: articles
  });
  
  $('body').append(content);
  
});