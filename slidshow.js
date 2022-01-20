// ----------------------------------------------
// ▼設定：スライドショーで見せたい画像ファイル群
// ----------------------------------------------
const imgset = [
    "./image/figure1.JPG",
    "./image/figure2.JPG",
    "./image/figure3.JPG",
    "./image/figure4.JPG",
    "./image/figure5.JPG",
    "./image/figure6.JPG"
];
let counter = 0;

slideid = setInterval(slideshow_timer,1200);   // 1500は切替秒数(ミリ秒)
function slideshow_timer() {
   // objって名前の変数ですよって宣言
   const obj = document.getElementById('slideshow_image'); 
   if( counter >= 0 ) {
      // 初回以外（カウンターが0以上の時）は透明度０にリセット
      obj.style.opacity = 0;
   }
   // 対象要素の画像URLを次の画像のURLに切り替える
   obj.src = imgset[counter];
   // カウンタを1増やす
   counter++; 
   if( counter >= imgset.length ) {
      // カウンタが画像数よりも大きくなったら0番に戻す
      counter = 0;
   }
   // 画像の透明度を操作
   obj.style.opacity = 1;
}