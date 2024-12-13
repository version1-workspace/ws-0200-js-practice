/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function printOneToTen(num) {
  for (num of number) {
    console.log(num);
  }
}
printOneToTen();

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
//npm run test __test__/001_syntax/003_loop.spec.js

printOneToTenDesc();

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let number = 0;
  while (number <= 10) {
    console.log(number);
    number++;
  }
}
printOneToTenWhile();

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  let number = 11;
  while (number > 0) {
    number--;
    console.log(number);
  }
}
printOneToTenWhileDesc();

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc,
};
