/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
}

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  for (let i = 0; i < 11; i++) {
    const number = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    console.log(number[i]);
  }
}

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let number = 0
  while (number < 11) {
    console.log(number);
    number++
  }
}

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

 function printOneToTenWhileDesc() {
  let number = 10
  while(number > -1) {
    let test = number;
    number--
    console.log(test);
  }
}

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
