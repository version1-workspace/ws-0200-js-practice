/**
 *  数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */

function sumSequence(n, sum = 0) {
  if (n <= 0) {
    return sum;
  }
  return sumSequence(n - 1, sum + n);
}

console.log(sumSequence(3));

/**
 *  フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci(num) {
  if (num <= 0) return [];
  if (num === 1) return [1];

  let fib = [1, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(fibonacci(10));

/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 *
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0,
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0,
 *          children: [
 *            {
 *              type: 'folder',
 *              size: 0,
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]
 *    }
 *    => 38
 */

function fileSize(node, sum = 0) {
  if (node.type === "file") {
    return node.size;
  }

  let total = 0;

  if (node.type === "folder" && node.children) {
    for (let i = 0; i < node.children.length; i++) {
      total += fileSize(node.children[i]);
    }
  }

  return total;
}
const directoryTree = {
  type: "folder",
  size: 0,
  children: [
    {
      type: "folder",
      size: 0,
      children: [
        {
          type: "folder",
          size: 0,
          children: [
            {
              type: "file",
              size: 5,
            },
            {
              type: "file",
              size: 7,
            },
            {
              type: "file",
              size: 9,
            },
          ],
        },
      ],
    },
    {
      type: "file",
      size: 3,
    },
    {
      type: "file",
      size: 4,
    },
    {
      type: "file",
      size: 10,
    },
  ],
};

console.log(fileSize(directoryTree));
module.exports = {
  sumSequence,
  fibonacci,
  fileSize,
};
