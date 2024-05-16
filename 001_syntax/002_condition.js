/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  return age >= 20 ? "成年です。" : "未成年です。";
}
console.log(printMessageByAge(21));
console.log(printMessageByAge(19));

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */

function greeding(hour) {
  if (hour >= 4 && hour < 12) {
    return console.log("Good Morning");
  } else if (hour >= 12 && hour <= 17) {
    return console.log("Hello");
  } else {
    return console.log("Good Night");
  }
}
// good morinng
greeding(4);
greeding(11);
//hello
greeding(12);
greeding(17);
greeding(16);
//night
greeding(18);
greeding(2);

/**
 *  2.3 引数から与えられた数字に対応する曜日を出力するメソッドを実装します。
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

function getDay(day) {
  if (day === 0) {
    return console.log("Sunday");
  } else if (day === 1) {
    return console.log("Monday");
  } else if (day === 2) {
    return console.log("Tuesday");
  } else if (day === 3) {
    return console.log("Wednesday");
  } else if (day === 4) {
    return console.log("Thursday");
  } else if (day === 5) {
    return console.log("Friday");
  } else if (day === 6) {
    return console.log("Saturday");
  } else {
    return null;
  }
}
getDay(0);
getDay(1);
getDay(2);
getDay(3);
getDay(4);
getDay(5);
getDay(6);

module.exports = {
  printMessageByAge,
  greeding,
  getDay,
};
