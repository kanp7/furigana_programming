let createMail = ( recv ) => {
  console.log( recv + '様' )
  console.log( 'PT企画の斎藤です。' );
  console.log( '請求書を送ります。' );
};
createMail('山本');
createMail('吉田');

// ES5で関数を作成する場合はfunction文を使う
function createMail(recv){
  console.log( recv + '様' )
  console.log( 'PT企画の斎藤です。' );
  console.log( '請求書を送ります。' );
}
createMail('山本');