var obj = {
  name: "John",
  age: 30,
  isMarried: false,
  friends: ["Bob", "Jane", "Mary"],
};

for (var key in obj) {
  if (Array.isArray(obj[key])) {
    let x = "";
    for (var value of obj[key]) {
      x += value + ", ";
    }
    console.log("key: " + key + ", value: " + x);
  } else console.log("key: " + key + ", value: " + obj[key]);
}

// function lowerToCamelCase(str, posArray) {
//   var newStr = "";
//   for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < posArray.length; j++)
//       if ((i = j)) newStr += str.charAt(i).toUpperCase();
//       else newStr += str.charAt(i);
//     return newStr;
//   }
// }

// function lowerToCamelCase(str, posArray) {
//   var newStr = "";
//   var p = 0;
//   for (var pos of posArray) {
//     newStr += str.slice(p, p + 1).toUpperCase() + str.slice(p + 1, pos);
//     p = pos;
//   }
//   newStr += str.slice(p, p + 1).toUpperCase() + str.slice(p + 1);
//   return newStr[0].toLowerCase() + newStr.slice(1);
// }

// להעתיק פתרון של אינדקס אוף

//הפתרון של סאלח
function lowerToCamelCase(str, posArray) {
  var newstr = "";
  for (var pos of posArray) {
    newstr = str.replace(str.charAt(pos), str.charAt(pos).toUpperCase());
    str = newstr;
  }
  return newstr;
}

console.log(lowerToCamelCase("somevarname", [4, 7]));

// write a function that accepts a number.
// this function will return another function that will calculate the factorial of that number;

var createFactorial = function (num) {
  return function () {
    let x = 1;
    for (var i = num; i > 0; i--) x *= i;
    return x;
  };
};

var factFunc = createFactorial(5);
var result = factFunc(); //120
console.log(result); //120
