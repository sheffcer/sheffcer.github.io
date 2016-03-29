//function pow(x, n) {
//  var result = x;
//  
//  for (var i = 1; i < n; i++) {
//    result = result * x;
//  }
//  return result;
//}
//
//var x = prompt('Введите основание', '');
//var n = prompt ('Введите степень', '');
//
//if ( n <= 0 ) {
//  alert('Эта степень ' + n + ' не поддерживается, введите число большее, чем 1');
//} else {
//  console.log(pow(x, n));
//}
//
//
//var userArray = [];
//
//function getUser() {
//  for (var i =0; i < 3; i++) {
//  userArray[i] = prompt('Введите пользователя №'+(i+1), '');
// }
//console.log(userArray);
//}
//
//getUser();
//
//function checkUser () {
// var  newUser=prompt('Введите имя пользователя', '');
//
//  if ( newUser.length < 1) {
//    alert('Achtung partisanen!!!');
//    return;
//  }
//  for ( i = 0; i < userArray.length; ++i) {
//  if ( userArray[i] != newUser ) {
//    alert(newUser+ 'Нет такого имени пользователя!');
//    break;
//  } else if(userArray[i] === newUser) {
//    alert(newUser+ ', Вы удачно вошли');
//    break;
//  } 
// }
//}
//checkUser();

//var names = [];
//
//  for(var i = 0; i < 5; i++){
//    names.push( prompt("Введите имя", '') );
//  }
//
//  console.log('Массив имен = ', names);
//
////Сравнение имени пользователя с именами в массиве
//
//  var userName = prompt('Введите имя пользователя', '');
//
//  if ( names.indexOf(userName) >= 0) {
//    console.log(userName + ', вы успешно вошли');
//  } else {
//    console.log('Неверное имя пользователя');
//    alert('Неверное имя пользователя');
//  }

var obj = {a: 1};        

var increment = function(obj ) { obj = {a: 2} }        

increment(obj);        

console.log(obj.a);0