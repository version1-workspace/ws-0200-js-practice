/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject(person) {
  return {
    name:'Bob',
    age: 32,
    gender:'Male'
  };
}
const malePerson = getPersonObject();
console.log(malePerson);
/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */
const a = {
  name: 'Bob',
  age: 32,
  gender: 'male'
}

function mutateObject(person) {

  person.name = 'Mary';
  person.age = 37;
  person.gender = 'female';
  return person
}
console.log(mutateObject(a));
/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

const people =['Bob', 'Mary','Ann','Mike'];

function assignNumber(persons) {
  const result ={}
  for(const person of persons){
    result[person] = Math.floor(Math.random()*10)+1
  }
  return result

}

console.log(assignNumber(people));

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  const num ={}
  for(const number of array){
    if(num[number]){
      return true;
    }
    else{
      num[number]=1
    }
  }
  return false
}

console.log(isDuplicate([1,2,3]));
console.log(isDuplicate([1,2,2,3]));
console.log(isDuplicate([]));

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
