(function() {
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
        rawData,
        $buttons;
    
    if (current == undefined) {
      finish();
      return;
    }
    
    rawData = current.getRawData();
    // bodyに新しいページを追加する。
    $('#tmpl-page').tmpl(rawData).appendTo('body');
    // ボタンを生成
    $buttons = $('#' + rawData.page + ' input');
    $buttons.click(function(event) {
      var $touched = $(event.target),
      selected = $touched.attr('no');
      $touched.button({theme: 'e'}); // タッチしたボタンの色を変える
      $buttons.button('disable');    // ボタンを非活性にする
      verify(selected); // 答え合わせ
    });

    // ページ遷移
    $.mobile.changePage('#' + rawData.page, {transition: 'flow'});

  }
  
  function finish() {
    var result = questions.getPercentage().toFixed();
    $('#tmpl-finish').tmpl().appendTo('body');
    $('#result').text(result);
    $.mobile.changePage('#finish', {transition: 'flow'});
  }
  
  function verify(selected) {
    var msg = (questions.isCorrect(selected)) ?
      '正解' :
      '不正解';
    
    alert(msg + ' : ' + questions.getResult());
    goNext();
    return false;
  }


  goNext();
  
}());

