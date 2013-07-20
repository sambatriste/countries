
(function() {
  var data = [
    { 
      name: "germany",
      answer: "ドイツ",
      options: [
        { option:"フランス" },
        { option:"オランダ" }
      ]
    },
    { // 1
      name: "uk",
      answer:"イギリス",
      options: [
        { option:"ノルウェー" },
        { option:"グリーンランド" }
      ]
    },
    { // 2
      name: "azerbaijan",
      answer: "アゼルバイジャン",
      options: [
        { option:"ルーマニア" },
        { option:"ブルガリア" }
      ]
    }
  ];
  var questions = new COUNTRIES.Questions(data);

  /** 次のページへ遷移する。*/
  function goNext() {
    var current = questions.nextQuestion(),
        rawData,
        $buttons;
    
    if (current === undefined) {
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
      selected = $touched.attr('value');
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

