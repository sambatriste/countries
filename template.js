
(function() {
  
  /** 次のページの情報を取得する。*/
  var getNext = (function() {
    var i = 0;
    return function() {
      var data = {
        page: 'page' + i, 
        btn: 'btn' + i,
        options: [
          { optId: "1", option:"ドイツ" + i  },
          { optId: "2", option:"フランス" },
          { optId: "3", option:"オランダ" }
        ]
      };
      i++;
      return data;
    };
  })();

  /** 次のページへ遷移する。*/
  var goNext = function() {
    var data = getNext(),
        btnId = '#' + data.btn,
        nextPageId =  '#' + data.page;
    // bodyに新しいページを追加する。
    $('#tmpl-page').tmpl(data).appendTo('body');
    // ボタンにイベントを追加する。
    $(btnId).click(function(event) {
      goNext();
    });
    // ページ遷移を行う。
    $.mobile.changePage(nextPageId, {transition: 'flow'});      

  };

  goNext();
  
}());
