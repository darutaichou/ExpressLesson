let express = require('express');
let app = express();

// ミドルウェア関数の例
let a_middleware_function = function(req, res, next) {
    // ... perform some operations
    next(); // next()を呼ぶことで Express はチェイン中の次のミドルウェア関数を呼びます

    // 全てのルートと動詞に対して use() で関数を追加します
    app.use(a_middleware_function);

    // 指定ルートに対して use() でミドルウェア関数を追加します
    app.use('/someroute', a_middleware_function);

    // 指定の HTTP 動詞とルートに対してミドルウェア関数を追加します
    app.get('/', a_middleware_function);

    app.listen(3000);
}