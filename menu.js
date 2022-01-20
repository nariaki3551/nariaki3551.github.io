const menus =  {
    // (連想配列)’インデックス1’（URL）:’値1’（メニューバーでの表記）
    'index':'home',
    'publications':'publications',
}

for(var m in menus)
// for(var インデックスの変数指定 in 連想配列)
{   document.write('<li class="menu-item"><a href="./'+m+'.html" class="clear">'+menus[m]+'</a></li>')
    // <リストのクラス指定><a href="./'インデックス指定'.html" class="clear">'+menus[m]+'</a></li>
}

// 以下ENページができた時のメニュー
// const url = location.href ; /* 表示されているURLの文字列を取得 */
// if ( url.indexOf('en-') !== -1 ) /* URLの文字列にen-が含まれているかどうか */{
//     for(var m in menus)
// // for(var インデックスの変数指定 in 連想配列)
// {   document.write('<li class="menu-item"><a href="./en-'+m+'.html" class="clear">'+menus[m]+'</a></li>')
//     // <リストのクラス指定><a href="./'インデックス指定'.html" class="clear">'+menus[m]+'</a></li>
// }
// }else{
//     for(var m in menus)
// {   document.write('<li class="menu-item"><a href="./'+m+'.html" class="clear">'+menus[m]+'</a></li>')
// }
// }

// SNSマークアイコン用
document.write(
'<div class="menuSnsIcon"><a href="https://github.com/nariaki3551" target="_blank" rel="noopener noreferrer">'+
'<img src="./image/GitHub-Mark-120px-plus.png"  class="githubIcon" "alt="githubのアイコン"/></a>'+
'<a href="https://inarizuuuushi.hatenablog.com/" target="_blank" rel="noopener noreferrer">'+
'<img src="./image/hatenablog-logo.svg" class="snsIconInner" alt="はてなブログのアイコン"/></a>'+
'</div>')

// SNSの文字アイコン用
// document.write(
// '<div class="menuSnsIcon"><a href="https://github.com/nariaki3551" target="_blank" rel="noopener noreferrer">'+
// '<img src="./image/GitHub_Logo.png" height="35px"  "alt="githubのアイコン"/></a>'+
// '<a href="https://inarizuuuushi.hatenablog.com/" target="_blank" rel="noopener noreferrer">'+
// '<img src="./image/hatenablog-logotype.svg" width="100px" alt="はてなブログのアイコン"/></a>'+
// '</div>')