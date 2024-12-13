/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */
//npm run test __test__/001_syntax/004_string.spec.js

function length(str) {
  return str.length;
}
length("hello");

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  return str.length % 2 === 0 ? true : false;
}
console.log(lengthIsEven("hello"));
console.log(lengthIsEven("hell"));
console.log(lengthIsEven("hel"));
console.log(lengthIsEven("he"));
console.log(lengthIsEven("h"));
console.log(lengthIsEven(""));

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  if (str[0]) {
    return str[0];
  } else {
    return "";
  }
}
console.log(firstChar("hello"));
console.log(firstChar(""));

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  if (str[str.length - 1]) {
    return str[str.length - 1];
  } else {
    return "";
  }
}
console.log(lastChar("hello"));
console.log(lastChar(""));

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  return str.substring(a - 1, b);
  // return str.slice(a, b + 1);
}
console.log(substring("hello", 2, 4));
console.log(substring("hello", 0, 5));
console.log(substring("hell0", 0, 1));

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  if (a.includes(b)) {
    return true;
  } else {
    return false;
  }
}
console.log(isInclude("workplace", "work"));
console.log(isInclude("work", "workplace"));
console.log(isInclude("hogehoge", ""));

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
printByChar("library");

module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar,
};
