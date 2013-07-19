var Questions;

(function() {

  Questions = function(data) {
    this.data = data;
    this.idx = 0,
    this.correctCnt = 0,
    this.currentQuestion = null;
  };

  Questions.prototype.nextQuestion = function() {
    var data = this.data[this.idx];
    if (data === undefined) {
      return undefined;
    }
    this.currentQuestion = new Question(data, this.idx);
    this.idx++;
    return this.currentQuestion;
  };

  
  Questions.prototype.getResult = function() {
    return this.correctCnt + '/' + this.idx;
  };

  Questions.prototype.getPercentage = function() {
    return this.correctCnt / this.idx * 100;
  };

  Questions.prototype.isCorrect = function(selected) {
    var correct = this.currentQuestion.isCorrect(selected);
    if (correct) {
      this.correctCnt++;
    }
    return correct;
  };

  var Question = function(data, idx) {
    this.data = data;
    this.idx = idx;
    
    if (data.correctAnswer < 0 ||
        data.options.length < data.correctAnswer) {
      throw Error("illgal argument. [" + data.options + "] , "
                  + data.correctAnswer);
    }
  };

  Question.prototype.getRawData = function() {
    var URL_PREFIX = "http://www.mofa.go.jp/mofaj/area/",
    URL_SUFFIX = "/image/map.gif";
    return {
      no : this.idx + 1,
      idx : this.idx,
      page : 'page' + this.idx,
      btn : 'btn' + this.idx,
      imageUrl : URL_PREFIX + this.data.name + URL_SUFFIX,
      options : this.data.options
    };
  };

  /** 正解の判定をする。*/
  Question.prototype.isCorrect = function(selected) {
    return (selected == this.data.correctAnswer);
  };

}());

