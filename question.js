function Question(options, correctAnswer) {

  this.checkOption = function(option) {
    if (option < 0 || options.length < option) {
      throw Error(
        "illgal argument. [" + options + "] , " + option);
    }
  };

  this.isSelected = function() {
    return selected !== undefined;
  };
  
  /** 正解の判定をする。*/
  this.isCorrect = function(selected) {
    console.log("selected=[" + selected + "]. correct=[" + correctAnswer +"]" );
    return selected == correctAnswer;
  };
  
  /** 選択肢を取得する。 */
  this.getOptions = function() {
    return options;
  };
  
  this.checkOption(correctAnswer);
}
