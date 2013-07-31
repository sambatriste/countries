
(function() {
  'use strict';

  var questions;
  var view;
  
  /** 次のページへ遷移する。*/
  function goNext() {

    var current = questions.nextQuestion(),
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
    $('#result').text(result);
    $.mobile.changePage('#finish', {transition: 'flow'});
  }
  
  function verify(selected) {
    $('#answerMap').attr('src', view.answerMap);
    $('#answerCountry').text(view.answerCountry);
    $('#answerDisp').text((questions.isCorrect(selected)) ? '正解' : '不正解');
    // ポップアップダイアログを表示
    $.mobile.changePage('#answerDialog', {transition: 'pop', role: 'dialog'});
  }

  $(document).delegate("#start", "pageinit", function() {
    $.ajax("data_asia.json", {
      type: "GET",
      dataType: "json",
      success: function(data, status, xhr) {
        var shuffled = COUNTRIES.utils.shuffle(data);
        questions = new COUNTRIES.Questions(shuffled);
      },
      error: function(data, status, xhr) {
        alert("Ajax Error! :" + status);
      }
    });

    $('#answerOk').click(function(event) {
      goNext();
      window.setTimeout(function() {
        $('#answerMap').attr('src', view.answerMap);
      }, 500);
    });
    $('#start').click(function(event) {
      goNext();
    });
  });
  
}());


