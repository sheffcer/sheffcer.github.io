/* test */
function birthdayDate() {
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
