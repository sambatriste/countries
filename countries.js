
$(function() {
  var question;

  $.getJSON("test.js", function(data) {
    question = new Question(data.options, data.correctAnswer);
    setUp(question, data.imageUrl);
  });
  
  function setUp(q, url) {
    $('#map').append(
      $('<img id="mapImg" class="img-polaroid" />')
        .attr('src', url)
    );
    
    $.each(q.getOptions(), function(i, e) {
      var optId = 'opt' + i,
          $input = $('<input type="radio" name="option"/>')
                     .attr('id', optId)
                     .attr('value', i),
          $label = $('<label>')
                     .attr('for', optId)
                     .text(e);
      $('#options').append($input).append($label);
    });
    $("input[type='radio']").checkboxradio().checkboxradio('refresh');

    $('#send').click(onSubmit);
    
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





