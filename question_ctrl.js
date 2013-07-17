var questions = new Questions();


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
