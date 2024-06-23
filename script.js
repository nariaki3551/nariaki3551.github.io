window.addEventListener('DOMContentLoaded', function () {
  //HTMLを読み込んだ後に実行する指示

  // headerの高さを取得してmainをその分引き下げる
  let header = document.getElementById('header');
  let main = document.getElementById('main');
  main.style.marginTop = `${header.clientHeight}px`;

  // menu生成
  header.insertAdjacentHTML(
    'beforeend',
    '<!-- メニュ-のスイッチ -->' +
      '<div id="trigger" class="sidebarIconToggle">' +
      '<span id="spi1" class="spinner p1"></span>' +
      '<span id="spi2" class="spinner p2"></span>' +
      '<span id="spi3" class="spinner p3"></span>' +
      '</div>' +
      '<nav id="nav" class="center"><a href="./index.html" class="black title center">立岩斉明</a><a href="./index.html" class="black titleEn center">Nariaki Tateiwa</a><ul id="menu"></ul></nav>'
  );

  let footer = document.getElementById('footer');
  footer.insertAdjacentHTML(
    'beforeend',
    '<div id="footerInner"><div><a href="./index.html" class="black title center">立岩斉明</a><a href="./index.html" class="black titleEn center">Nariaki Tateiwa</a><ul id="footerMenu"></ul></div></div>'
  );

  const menuset = [
    // {'url':'(url)','head':'(見出し)','sub':'(小見出し)'},
    { url: 'index', head: 'home' },
    { url: 'publications', head: 'publications' },
    { url: 'talks', head: 'talks' },
  ];

  for (let i of menuset) {
    let menu = document.getElementById('menu');
    let footerMenu = document.getElementById('footerMenu');
    menu.insertAdjacentHTML(
      'beforeend',
      `<li class="boder center"><a class="black" href="./${i.url}.html">${i.head}</a></li>`
    );
    footerMenu.insertAdjacentHTML(
      'beforeend',
      `<li class="boder weight"><a class="black" href="./${i.url}.html">${i.head}</a></li>`
    );
  }
  // menu内SNSマークアイコン
  let nav = document.getElementById('nav');
  nav.insertAdjacentHTML(
    'beforeend',
    '<div id="sns"><p>Follow me</p>' +
      '<div class="snsInner">' +
      '<a class="center iconsize snsContener" href="https://github.com/nariaki3551" target="_blank" rel="noopener noreferrer">' +
      '<img src="./image/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png"  class="githubIcon" "alt="githubのアイコン"/>' +
      '<img src="./image/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"  class="githubIcon" "alt="githubのアイコン"/></a>' +
      '<a class="center iconsize snsContener" href="https://inarizuuuushi.hatenablog.com/" target="_blank" rel="noopener noreferrer">' +
      '<img src="./image/Logo-HatenaBlog/hatenablog-logo-Light.svg" class="iconsize" alt="はてなブログのアイコン"/>' +
      '<img src="./image/Logo-HatenaBlog/hatenablog-logo.svg" class="iconsize" alt="はてなブログのアイコン"/></a>' +
      '</div></div>'
  );
  // footer内SNSlogo
  let footerInner = document.getElementById('footerInner');
  footerInner.insertAdjacentHTML(
    'beforeend',
    '<div class="logo center">' +
      '<a href="https://github.com/nariaki3551" target="_blank" rel="noopener noreferrer" class="boder">' +
      '<img src="./image/GitHub-Logos/GitHub_Logo.png"  height="45px" "alt="githubのロゴ"/>' +
      '<a href="https://inarizuuuushi.hatenablog.com/" target="_blank" rel="noopener noreferrer" class="boder">' +
      '<img src="./image/Logo-HatenaBlog/hatenablog-logotype.svg" height="45px" alt="はてなブログのロゴ"/></a>' +
      '</div>'
  );

  // 画面のサイズ変更がされた時に930px以下・以上でsnsアイコンの要素を移動させる
  let sns = document.getElementById('sns');
  let windowSize = window.innerWidth;

  if (windowSize < 930) {
    console.log('Small!');
    menu.insertBefore(sns, menu.null);
  } else {
    console.log('Large!');
    nav.insertBefore(sns, nav.null);
  }
  window.onresize = function () {
    let windowSize = window.innerWidth;
    if (windowSize < 930) {
      menu.insertBefore(sns, menu.null);
    } else {
      nav.insertBefore(sns, nav.null);
    }
  };

  // メニュートリガーボタンとcss付け替え
  let trigger = document.getElementById('trigger');
  trigger.addEventListener('click', function () {
    document.getElementById('spi1').classList.toggle('openP1');
    document.getElementById('spi2').classList.toggle('openP2');
    document.getElementById('spi3').classList.toggle('openP3');
    menu.classList.toggle('openMenu');
    sns.classList.toggle('snsIconOpen');
    header.classList.toggle('headerOpen');
  });

  // メニューオープン時スクロール禁止する関数
  let state = false; //いつオープンなのかを定義する
  function notscroll(e) {
    e.preventDefault();
  }
  // true=メニューオープン、false=メニュークローズ
  trigger.addEventListener('click', function () {
    if (state == true) {
      state = false;
      document.removeEventListener('touchmove', notscroll, { passive: false });
      document.removeEventListener('wheel', notscroll, { passive: false });
    } else {
      state = true;

      document.addEventListener('touchmove', notscroll, { passive: false });
      document.addEventListener('wheel', notscroll, { passive: false });
    }
    console.log(state);
  });
  // ページトップジャンプボタン
  $(document).ready(function () {
    // jQuery
    const scrolled = $('#scrolled'); //ボタンを取得
    const header = $('header').height(); // headerを取得
    const y = $('h1').offset().top + $('h1').outerHeight() - header; // 座標を取得・指定
    // 最初は非表示
    scrolled.hide();
    // スクロール時
    $(window).scroll(function () {
      if ($(this).scrollTop() > y) {
        scrolled.fadeIn();
      } else {
        scrolled.fadeOut();
      }
    });
    //スクロールしてトップに戻る
    scrolled.click(function () {
      $('body,html').animate(
        {
          //アニメーションの設定メソッド
          scrollTop: 0,
        },
        500
      ); //速度
      return false; //親要素への伝播回避
    });
  });

  // リンクを別タブで開く記述を自動でつける
  let a = document.getElementById('main').querySelectorAll('a');
  for (let i = 0; i < a.length; i++) {
    if (a[i].hasAttribute('href')) {
      a[i].setAttribute('target', '_blank');
      a[i].setAttribute('rel', 'noopener noreferrer');
    }
  }
});
