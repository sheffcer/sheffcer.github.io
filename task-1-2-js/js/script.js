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