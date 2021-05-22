// HTTPモジュールの読み込み
let http = require("http");

// HTTPサーバーを作成し、ポート8000でリクエストを行う
http.createServer((request, response) => {

    // HTTPステータスとコンテントタイプを持つ HTTP ヘッダのレスポンスを設定
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // レスポンスボディー"Hello World"を送信
    response.end('Hello World\n');
}).listen(8000);

// サーバーにアクセスするための URL を出力
console.log('Server running at http://127.0.0.1:8000/');