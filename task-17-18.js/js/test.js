(function() {
  $( '.js-new-york' ).mouseenter(function() {
    $( ".icon--usa" ).effect( "bounce", { times: 1 }, "slow" );
  },null);

  $( '.js-slovakia' ).mouseenter(function() {
    $( ".icon--europe" ).effect( "bounce", { times: 1 }, "slow" );
  },null);

  $( '.js-kiev' ).mouseenter(function() {
    $( ".icon--ukraine" ).effect( "bounce", { times: 1 }, "slow" );
  },null);

  $( '.js-hong-kong' ).mouseenter(function() {
    $( ".icon--honkong" ).effect( "bounce", { times: 1 }, "slow" );
  },null);


})();

// last birthday
  function getLastBirthday() {
  var dayNow = new Date();
  var day = dayNow.getDate();
  var month = dayNow.getMonth() + 1; // месяцы нумеруются с 0
  var year = dayNow.getFullYear();

  var Year;
   if (month > 1 || (month === 1 && day > 2)) {
//    if (month === 1 && day === 2) {
      Year = year;
    } else {
       Year = year - 1;
    }
    return new Date(Year, 0, 2);
   };

var xxx = getLastBirthday();
console.log(xxx);
var now  = new Date();
//var dayPassed = (now -  getLastBirthday())/24/60/60/1000;
//console.log(dayPassed);

function dayDiff(a, b) {
  return (a - b)/24/60/60/1000;
}

var dayPassed = dayDiff(new Date(), getLastBirthday());
console.log(dayPassed);
