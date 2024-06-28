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
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
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
  if (num <= 0) {
    return 0;
  }
  let fib = [1, 1];
  for (let i = 2; i < num; i++) {
    console.log(fib.push(fib[i - 1] + fib[i - 2]));
  }
  return fib.slice(0, num);
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

  let result = 0;
  // console.log(node.children);
  if (node.children && node.children.length > 0) {
    for (let i = 0; i < node.children.length; i++) {
      result += fileSize(node.children[i]);
    }
  }
  return result;
}

const directoryStructure = {
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

console.log(fileSize(directoryStructure));

module.exports = {
  sumSequence,
  fibonacci,
  fileSize,
};
