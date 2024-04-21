let operation = prompt("Укажите действие", "");
let numberOne = prompt("Enter number one", "");
let numberTwo = prompt("Enter number two", "");
let result = null;

function calc(operation, numberOne, numberTwo) {
  if (operation === "add") {
    return (result = +numberOne + +numberTwo);
  } else if (operation === "multi") {
    return (result = +numberOne * +numberTwo);
  } else if (operation === "subtract") {
    return (result = +numberOne - +numberTwo);
  // } else if (isNaN(numberOne) || isNaN(numberTwo)) {
  //   alert("Вы ввели не числовое значение");
  } else if (numberTwo === "Infinity") {
    alert("На ноль делить нельзя");
  }
}
const res = calc(operation, numberOne, numberTwo);
alert(res);

// console.log(calc('multi', 2, 9))
// console.log(calc('add', 2, 7))
// console.log(calc('subtract', 24, 10))
// console.log(calc('123', 123, 123))
// console.log(calc('add'))
// console.log(calc('add', '123', 12))
