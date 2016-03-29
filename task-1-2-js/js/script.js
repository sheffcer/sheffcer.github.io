function pow(x, n) {
  var result = x;
  
  for (var i = 1; i < n; i++) {
    result = result * x;
  }
  return result;
}

var x = prompt('Введите основание', '');
var n = prompt ('Введите степень', '');

if ( n <= 0 ) {
  alert('Эта степень ' + n + ' не поддерживается, введите число большее, чем 1');
} else {
  console.log(pow(x, n));
}

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
////    break;
//  } else if(userArray[i] === newUser) {
//    alert(newUser+ ', Вы удачно вошли');
//    break;
//  } 
// }
//}
//checkUser();

var userArray = [];

function getUser() {
    for (var i =0; i < 5; i++) {
        userArray[i] = prompt('Введите пользователя №'+(i+1), '');
    }
    console.log(userArray);
}

function checkUser () {
    var  newUser=prompt('Введите имя пользователя', '');
    if ( newUser.length < 1) {
       return 'Achtung partisanen!!!';
    }
    for ( i = 0; i < userArray.length; ++i) {
         if(userArray[i] === newUser) {
            return newUser+ ', Вы удачно вошли';
        }
    }
    return newUser+ ', Нет такого имени пользователя!';
}

getUser();
var message = checkUser();
alert(message);