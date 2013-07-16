
var current;

/** 次のページの情報を取得する。*/
var getNextData = (function() {
  var URL_PREFIX = "http://www.mofa.go.jp/mofaj/area/";
  var i = 0;
  var data = [
    { // 0
      imageUrl: URL_PREFIX + "germany/image/map.gif",
      options: [
        { optId: "1", option:"ドイツ" },
        { optId: "2", option:"フランス" },
        { optId: "3", option:"オランダ" }
      ],
      correctAnswer: "1"
    },
    { // 1
      imageUrl: URL_PREFIX + "uk/image/map.gif",
      options: [
        { optId: "1", option:"ノルウェー" },
        { optId: "2", option:"イギリス" },
        { optId: "3", option:"グリーンランド" }
      ],
      correctAnswer: "2"
    },
    { // 2
      imageUrl: URL_PREFIX + "azerbaijan/image/map.gif",
      options: [
        { optId: "1", option:"アゼルバイジャン" },
        { optId: "2", option:"ルーマニア" },
        { optId: "3", option:"ブルガリア" }
      ],
      correctAnswer: "2"
    }
  ];
  return function() {
    var ret = data[i];
    // ページIDとボタンIDを付与
    if (ret !== undefined ) {
      ret.page = 'page' + i;
      ret.btn = 'btn' + i;
      ret.qId = 'q' + i;
      i += 1;
    }
    return ret;
  };
})();

/** 次のページへ遷移する。*/
var goNext = function() {
  current = getNextData();
  if (current == undefined) {
    alert('おしまい');
  }
  
  // bodyに新しいページを追加する。
  $('#tmpl-page').tmpl(current).appendTo('body');
  
  // ページ遷移を行う。
  // ボタンにイベントを追加する。
  $('#' + current.btn).click(function(event) {
    alert(event.target.opt);
    goNext();
  });

  $.mobile.changePage('#' + current.page, {transition: 'flow'});

};

function verify(selected) {
  if (!current) { return false; }
  var msg = current.correctAnswer == selected ? '正解' : '不正解';
  alert(msg);
  goNext();
  return false;
}


goNext();
