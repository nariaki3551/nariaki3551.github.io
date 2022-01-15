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