var data = [
  { // 0
    name: "germany",
    options: [
      { no: "1", option:"ドイツ" },
      { no: "2", option:"フランス" },
      { no: "3", option:"オランダ" }
    ],
    correctAnswer: "1"
  },
  { // 1
    name: "uk",
    options: [
      { no: "1", option:"ノルウェー" },
      { no: "2", option:"イギリス" },
      { no: "3", option:"グリーンランド" }
    ],
    correctAnswer: "2"
  },
  { // 2
    name: "azerbaijan",
    options: [
      { no: "1", option:"アゼルバイジャン" },
      { no: "2", option:"ルーマニア" },
      { no: "3", option:"ブルガリア" }
    ],
    correctAnswer: "1"
  }
];
var questions = new Questions(data);


/** 次のページへ遷移する。*/
function goNext() {
  var current = questions.nextQuestion(),
      $buttons;
  if (current == undefined) {
    $('#tmpl-finish').tmpl().appendTo('body');
    $('#result').text(questions.getPercentage().toFixed());
    $.mobile.changePage('#finish', {transition: 'flow'});
    return;
  }
  
  // bodyに新しいページを追加する。
  $('#tmpl-page').tmpl(current).appendTo('body');
  
  $buttons = $('#' + current.page + ' input');
  $buttons.click(function(event) {
    var $touched = $(event.target);
    $touched.button({theme: 'e'});
    // ボタンを非活性にする
    $buttons.button('disable');
    var selected = $touched.attr('no');
    verify(selected);
  });
  $.mobile.changePage('#' + current.page, {transition: 'flow'});

};

function verify(selected) {
  var msg;
  if (questions.isCorrect(selected)) {
    msg = '正解';
  } else {
    msg = '不正解';
  }
  
  alert(msg + ' : ' + questions.getResult());
  goNext();
  return false;
}
goNext();
