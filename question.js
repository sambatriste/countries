function Question(data) { //options, correctAnswer) {
  
  this.checkOption = function(option) {
    if (option < 0 || data.options.length < option) {
      throw Error(
        "illgal argument. [" + data.options + "] , " + option);
    }
  };

  /** 正解の判定をする。*/
  this.isCorrect = function(selected) {
//    console.log("selected=[" + selected + "]. correct=[" + correctAnswer +"]" );
    return selected == data.correctAnswer;
  };
  
  /** 選択肢を取得する。 */
  this.getOptions = function() {
    return data.options;
  };

  this.getImageUrl() = function() {
    return data.imageUrl;
  };

  this.checkOption(data.correctAnswer);
}
