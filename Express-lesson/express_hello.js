// Expressモジュールの読み込み
let express = require('express');
let app = express();

// ルートの定義
// サイトルートからの相対パス('/')を持つ HTTP GET リクエストがあるたびに呼び出されるコールバック関数を指定
// コールバック関数はリクエストとレスポンスオブジェクトを引数をして取り、レスポンスに対してsend()を呼び出して Hello World! を返す
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// 3000ポートでサーバを起動
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});