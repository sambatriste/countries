var page = $('<section id="pageOne" data-role="page"/>').appendTo(document.body),
    header = $('<header data-role="header"/>').appendTo(page),
    content = $('<article data-role="content" />').appendTo(page),
    footer = $('<footer data-role="footer" />').appendTo(page);


$('<h3>新たに作成したページ</h3>').appendTo(header);
$('<h3>コンテンツ領域</h3>').appendTo(content);
$('<a id="hoge" href="#" data-role="button" data-rel="back" data-icon="back">戻る</a>').appendTo(content);
$('<h3>Powered by jQuery Mobile</h3>').appendTo(footer);
$('#hoge').click(function(event) {
  nextPage();
  return false;
});

//page.page({addBackBtn: true, backBtnText: '戻る'});
$.mobile.changePage('#pageOne', {transition: 'flow'});


function nextPage() {

  var page = $('<section id="page2" data-role="page"/>').appendTo(document.body),
    header = $('<header data-role="header"/>').appendTo(page),
    content = $('<article data-role="content" />').appendTo(page),
    footer = $('<footer data-role="footer" />').appendTo(page);


  $('<h3>次のページ</h3>').appendTo(header);
  $('<h3>次のコンテンツ領域</h3>').appendTo(content);
  $('<a id="hoge" href="#" data-role="button" data-rel="back" data-icon="back">戻る</a>').appendTo(content);
  $('<h3>Powered by jQuery Mobile</h3>').appendTo(footer);
  $.mobile.changePage('#page2', {transition: 'flow'});
}