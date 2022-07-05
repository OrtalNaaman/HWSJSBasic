var y = +prompt("Please enter year of birth");
var m = +prompt("Please enter month of birth");
var d = +prompt("Please enter day of birth");
var dateOfBirth = new Date(y, m - 1, d);
var now = new Date(Date.now());
var daysLeft = 100 * 365 - (now - dateOfBirth) / 1000 / 60 / 60 / 24;
var yearsLeft = (daysLeft - (daysLeft % 365)) / 365;
var monthLeft = Math.abs(((daysLeft % 365) - ((daysLeft % 365) % 30)) / 30);
var daysLeft = Math.round((daysLeft / 365) % 30);
alert(
  "You have " +
    yearsLeft +
    " years, " +
    monthLeft +
    " month and " +
    daysLeft +
    " days to live"
);
document.write(
  "You have " +
    yearsLeft +
    " years, " +
    monthLeft +
    " month and " +
    daysLeft +
    " days to live 🕥"
);
console.log(
  "You have " +
    yearsLeft +
    " years, " +
    monthLeft +
    " month and " +
    daysLeft +
    " days to live"
);
