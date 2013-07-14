

$(function() {
  var question;

  $.getJSON("test.js", function(data) {
    question = new Question(data.options, data.correctAnswer);
    setUp(question);
  });
  
  function setUp(q) {
    $.each(q.getOptions(), function(i, e) {
      $('#options').append(
        $('<label class="radio">').append(
          $('<input type="radio"/>')
            .attr('name', 'option')
            .attr('value', i))
          .append(e)
          .click(onCheck)
      );
    });
    $('#frm').submit(onSubmit);
  }
  
  function onSubmit(event) {
    var msg = question.isCorrect() ? "正解" : "間違い";
    alert(msg);
    return false;
  }

  function onCheck(event) {
    var selected = $(event.currentTarget).find('input[type="radio"]').val();
    question.setSelected(selected);
  }
});





