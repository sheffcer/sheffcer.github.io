$(function() {
  
  var html = $('#test').html();
  
  var articles = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!'
    },
    
    {
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!'
    },
    
    {
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, sint!'
    }
  ]
      
  var content = tmpl(html, {
    data: articles
  });
  
  $('body').append(content);
  
});