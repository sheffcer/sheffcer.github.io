var animal = {
  name:'jack',
  color: 'black',
  age: 5
};

 var str = JSON.stringify(animal);

console.log(str);

var obj = JSON.parse(str);

console.log(obj);
console.log(obj.color);