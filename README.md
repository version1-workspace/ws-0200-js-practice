## js-practice

JavaScript練習用のリポジトリ です。

## 課題で身に着けること

- JavaScriptの基本構文
  - 四則演算
  - if文
  - for文、while文
  - 配列
  - オブジェクト
  - 関数
  - クラスとインスタンス
- データとアルゴリズム
  - ソートアルゴリズム
  - 検索アルゴリズム
  - 再帰処理
  - スタックとキュー
  - 単一方向リスト

## 課題の進め方

#### 0. 課題を始める前にリポジトリ をフォーク

#### 1. フォークしてリポジトリ をクローンして課題をスタート

#### 2. 課題に必要な概念を学ぶ

一度に全部読む必要はないので、問題を解きながら適宜参照してください。

- [プログラムの計算量を求める方法](https://qiita.com/cotrpepe/items/1f4c38cc9d3e3a5f5e9c#%E8%A3%9C%E8%B6%B3%E6%99%82%E9%96%93%E8%A8%88%E7%AE%97%E9%87%8F%E3%81%A8%E7%A9%BA%E9%96%93%E8%A8%88%E7%AE%97%E9%87%8F%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)


- 0001_syntax jsの文法を学ぶ基本問題
   - 001_base.js
     - [式と演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators)
     - [JavaScriptでの基本演算 — 数値と演算子](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Math)
   - 002_condition.js
     - [制御フローとエラー処理](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
   - 003_loop.js
      - [ループとイテレータ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
   - 004_string.js
     - [テキストを扱う — JavaScript での文字列](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Strings)
     - [Stringリファレンス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String)
   - 005_array.js
     - [配列](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Arrays)
     - [Arrayリファレンス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)
   - 006_object.js
     - [JavaScript オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics)
- 0002_practice js練習問題
   - 001_easy.js
   - 002_medium.js
- 0003_algorithm アルゴリズム問題をjsを使ってとく問題
   - 001_recursion.js 再帰アルゴリズムの実装
     - [再帰関数を学ぶと、どんな世界が広がるか - Qiita](https://qiita.com/drken/items/23a4f604fa3f505dd5ad)
   - 002_search.js 検索アルゴリズムの実装
     - [リニアサーチ（線形探索法） ~『楽しく学ぶ　アルゴリズムとプログラミングの図鑑』より](https://book.mynavi.jp/manatee/detail/id=64253)
     - [アルゴリズムを勉強するなら二分探索から始めよう！ 『なっとく！アルゴリズム』より](https://codezine.jp/article/detail/9900?p=2)
   - 003_sort.js ソートアルゴリズムの実装
   　- [ソートを極める！ 〜 なぜソートを学ぶのか 〜](https://qiita.com/drken/items/44c60118ab3703f7727f#10-7-%E3%83%9C%E3%82%B4%E3%82%BD%E3%83%BC%E3%83%88)

- [JavaScript ドキュメント](https://developer.mozilla.org/ja/docs/Web/JavaScript)

#### 3. 各設問のコメントにしたがって、回答

出力する・表示するといったものはconsole.logを使ってコンソールに結果を出力するようにしてください。
また、返却する・返すといった指定のあるものはreturnで値を返すようお願いします。

※ JavaScriptの組み込みのAPIを使わずに実装してみましょう

#### 4. テストコードを実行

各問題にはテストコードが用意されています。(testディレクトリ配下) 各問題を解いたらテストコードを実行して期待の挙動になていることを確認しましょう。

```bash
$ npm run test # テストを実行
```
![テスト実行-全て](./assets/run-test-all.png)

全てのテストを実行すると時間がかかるので下記のようにテストファイルを指定して実行することもできます。

```bash
$ npm run test [テストファイルへのパス] # テストを実行
```

![テスト実行-ファイル](./assets/run-test-file.png)


## 目次

- 0001_syntax jsの文法を学ぶ基本問題(map, filterなどの組み込みのAPIを使わずにときましょう）
   - 001_base.js
   - 002_condition.js
   - 003_loop.js
   - 004_string.js
   - 005_object.js
- 0002_practice js練習問題
   - 001_easy.js
- 0003_algorithm アルゴリズム問題をjsを使ってとく問題
   - 001_recursion.js 再帰アルゴリズムの実装
   - 002_search.js 検索アルゴリズムの実装
   - 003_sort.js ソートアルゴリズムの実装
   - 004_stackQueue.js スタック・キューのアルゴリズム問題（作成中）
   - 005_linkedList.js 単一方向リストのアルゴリズム問題（作成中）


