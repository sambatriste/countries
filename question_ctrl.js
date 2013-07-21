
(function() {

  var questions;


  /** 次のページへ遷移する。*/
  function goNext() {
    var current = questions.nextQuestion(),
        view,
        $buttons;
    
    if (current === undefined) {
      finish();
      return;
    }
    
    view = new COUNTRIES.QuestionView(current);
    // bodyに新しいページを追加する。
    $('#tmpl-page').tmpl(view).appendTo('body');
    // ボタンを生成
    $buttons = $('#' + view.page + ' input');
    $buttons.click(function(event) {
      var $touched = $(event.target),
      selected = $touched.attr('value');
      $touched.button({theme: 'e'}); // タッチしたボタンの色を変える
      $buttons.button('disable');    // ボタンを非活性にする
      verify(selected); // 答え合わせ
    });

    // ページ遷移
    $.mobile.changePage('#' + view.page, {transition: 'flow'});

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

  $.ajax("question_data.js", {
    type: "GET",
    dataType: "json",
    success: function(data, status, xhr) {
      var shuffled = COUNTRIES.utils.shuffle(data);
      questions = new COUNTRIES.Questions(shuffled);
      goNext();
    },
    error: function(data, status, xhr) {
      alert(status);
    }
  });
  
}());


