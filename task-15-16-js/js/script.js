// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Human(name,age,sex,height,weight) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
}



// --------- Класс-потомок -----------
// Конструктор потомка
function Worker(name,age,sex,height,weight,job,salary) {
  Human.apply(this, arguments);
  this.job = job;
  this.salary = salary;
}

// Унаследовать
Worker.prototype = Object.create(Human.prototype);

// Сохраняем конструктор
Worker.prototype.constructor = Worker;
//метод в прототипе
Worker.prototype.work = function() {
  console.log(this.name + " в свои "+this.age+" лет работает на "+this.job+" за "+this.salary);
}




// --------- Класс-потомок -----------
// Конструктор потомка
function Student(name,age,sex,height,weight,study,grant) {
  Human.apply(this, arguments);
  this.study = study;
  this.grant = grant;
}
// Унаследовать
Student.prototype = Object.create(Human.prototype);
// Сохраняем конструктор
Student.prototype.constructor = Student;

//метод в прототипе
Student.prototype.watchSerials = function() {
  console.log(this.name + " смотрит сериалы, вместо посещения пар в "+this.study);
}





// Создаем объекты
var oneWorker = new Worker('Вася',40,'Мужик','метр с кепкой','90','Rubin','100грн');
oneWorker.work();


var oneStudent = new Student('Петя',20,'Мужик','180 см','80','КПИ','1000грн');
oneStudent.watchSerials();



console.log("\n\n\n");
console.log(oneWorker);
console.log("\n");
console.log(oneStudent);