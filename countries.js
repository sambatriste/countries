
(function() {
  var q;
  function createQuestion(data) {
    return new Question(data.options, data.correctAnswer);
  }

  function setUpOptions() {
    $.each(q.getOptions(), function(i, e) {
      $('#options').append(
        $('<label class="radio">').append(
          $('<input type="radio"/>')
            .attr('name', 'option')
            .attr('value', i))
          .append(e)
          .click(function(event) {
            onCheck(event);
          })
      );
    });
  }
  
  function onSubmit(event) {
    console.log("hoge");
    var msg = q.isCorrect() ? "正解" : "間違い";
    alert(msg);
    return false;
  }

  function onCheck(event) {
    var selected = $(event.currentTarget).find('input[type="radio"]').val();
    q.setSelected(selected);
  }

  $(function() {
    $('#frm').submit(function(event) {
      onSubmit(event);
      return false;
    });

    
//    var q;// = new Question(["ドイツ", "フランス"], 0);
    $.getJSON("test.js", function(json) {
      q = createQuestion(json);
      setUpOptions(q);
    });

  });

}());



