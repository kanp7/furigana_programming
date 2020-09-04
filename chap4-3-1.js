// ES2015で追加された``（バッククォート）でテンプレート文字列を作る事が出来る。
// shift + @ で｀を入力できる。
let createMail = ( recv, bill ) => {
  let msg = `${recv}様
PT企画の斎藤です。
今月の請求額は${bill}円です。`;
  console.log( msg );
};
createMail('山本', 40000 );

// テンプレート文字列を使用しない場合
// option + ¥ で \ を入力出来る
let createMail = ( recv, bill ) => {
  let msg = recv + '様\n'
  + 'PT企画の斎藤です。\n'
  + '今月の請求額は' + bill + '円です。';
  console.log( msg );
};
createMail( '山本', 4000 );