function load(){

// menu生成
let menu = document.getElementById('menu');
menu.innerHTML = ('<ul id="menuitem"></ul>');

const menuset = [
    // {'url':'(url)','head':'(見出し)','sub':'(小見出し)'},
    {url:'index', head:'home'},
    {url:'publications', head:'publications'},
    {url:'talks', head:'talks'}
 ]

 for(let i of menuset){ 
   let menuitem = document.getElementById('menuitem');
    menuitem.innerHTML +=(`<li><a href="./${i.url}.html">${i.head}</a></li>`);
 }
// SNSマークアイコン用
menuitem.innerHTML += (
'<div class="menuSnsIcon"><a href="https://github.com/nariaki3551" target="_blank" rel="noopener noreferrer">'+
'<img src="./image/GitHub-Mark-120px-plus.png"  class="githubIcon" "alt="githubのアイコン"/></a>'+
'<a href="https://inarizuuuushi.hatenablog.com/" target="_blank" rel="noopener noreferrer">'+
'<img src="./image/hatenablog-logo.svg" class="snsIconInner" alt="はてなブログのアイコン"/></a>'+
'</div>')

// ページトップジャンプボタン
$(document).ready(function(){ // jQuery
   const scrolled = $('#scrolled'); //ボタンを取得
   const header = $('header').height();// headerを取得
   const y= ($('h1').offset().top+$('h1').outerHeight())-header; // 座標を取得・指定
   // 最初は非表示
   scrolled.hide();
   // スクロール時
   $(window).scroll(function () {
      if ($(this).scrollTop() > y ) {
         scrolled.fadeIn();
      } else {
         scrolled.fadeOut();
      }
   });
   //スクロールしてトップに戻る
   scrolled.click(function () {
      $('body,html').animate({  //アニメーションの設定メソッド
         scrollTop: 0
      }, 500);     //速度
     return false; //親要素への伝播回避
    });
   });
}
window.onload = load;
