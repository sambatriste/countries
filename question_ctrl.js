var data = [
  { // 0
    name: "germany",
    options: [
      { optId: "1", option:"ドイツ" },
      { optId: "2", option:"フランス" },
      { optId: "3", option:"オランダ" }
    ],
    correctAnswer: "1"
  },
  { // 1
    name: "uk",
    options: [
      { optId: "1", option:"ノルウェー" },
      { optId: "2", option:"イギリス" },
      { optId: "3", option:"グリーンランド" }
    ],
    correctAnswer: "2"
  },
  { // 2
    name: "azerbaijan",
    options: [
      { optId: "1", option:"アゼルバイジャン" },
      { optId: "2", option:"ルーマニア" },
      { optId: "3", option:"ブルガリア" }
    ],
    correctAnswer: "1"
  }
];
var questions = new Questions(data);


/** 次のページへ遷移する。*/
function goNext() {
  var current = questions.nextQuestion();
  if (current == undefined) {
    alert('おしまい');
    $('#tmpl-finish').tmpl().appendTo('body');
    $('#result').text(questions.getPercentage().toFixed());
    $.mobile.changePage('#finish', {transition: 'flow'});
    return;
  }
  
  // bodyに新しいページを追加する。
  $('#tmpl-page').tmpl(current).appendTo('body');
  
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
