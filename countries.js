
$(function() {
  var question;

  $.getJSON("test.js", function(data) {
    question = new Question(data.options, data.correctAnswer);
    setUp(question, data.imageUrl);
  });
  
  function setUp(q, url) {
    $('#mapImg').attr('src', url);

    $.each(q.getOptions(), function(i, e) {
      var id = '#opt' + i;
      $(id).text(e).click(function(event) {
        return onSubmit(i);
      });
    });
    $('#list').listview('refresh');
  }
  
  function onSubmit(selected) {
    var msg = question.isCorrect(selected) ? "正解" : "間違い";
    alert(msg);
    return false;
  }

});





