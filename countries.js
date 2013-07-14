var q;// = new Question(["ドイツ", "フランス"], 0);

function createQuestion(data) {
  return new Question(data.options, data.correctAnswer);
}

function Question(options, correctAnswer) {
  var selected; // ユーザが選択した選択肢

  this.checkOption = function(option) {
    if (option < 0 || options.length < option) {
      throw Error(
        "illgal argument. [" + options + "] , " + option);
    }
  };

  this.isSelected = function() {
    return selected !== undefined;
  };
  
  /** 選択肢を設定する。*/
  this.setSelected = function(option) {
    this.checkOption(option);
    selected = option;
  };
  
  /** 正解の判定をする。*/
  this.isCorrect = function() {
    console.log("selected=[" + selected + "]. correct=[" + correctAnswer +"]" );
    return this.isSelected() && selected == correctAnswer;
  };
  
  /** 選択肢を取得する。 */
  this.getOptions = function() {
    return options;
  };
  
  this.checkOption(correctAnswer);
}


$(function() {
  var q;
  $.getJSON("test.js", function(json) {
    q = createQuestion(json);
    console.log(q.options);
  });
  
  $.each(q.getOptions(), function(i, opt) {
    $('#options').append(
      $('<label class="radio">').append(
        $('<input type="radio"/>')
          .attr('name', 'option')
          .attr('value', i))
        .append(opt)
        .click(function(event) {
          onCheck(event);
        })
    );
  });

  $('#frm').submit(function(event) {
    onSubmit(event);
    return false;
  });


  function onSubmit(event) {
    var msg = q.isCorrect() ? "正解" : "間違い";
    alert(msg);
  }

  function onCheck(event) {
    var selected = $(event.currentTarget).find('input[type="radio"]').val();
    q.setSelected(selected);
  }
});

