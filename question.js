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
