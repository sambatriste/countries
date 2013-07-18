function Questions(data) {
  var idx = 0,
      correctCnt = 0,
      currentQuestion;
  
  this.nextQuestion = function() {
    var nextData = data[idx];
    if (nextData == undefined) {
      return undefined;
    }
    currentQuestion = new Question(nextData, idx);
    idx++;
    return currentQuestion;
  };
  
  this.getCorrectCnt = function() {
    return correctCnt;
  };

  this.getTotalCnt = function() {
    return idx;
  };

  this.getResult = function() {
    return this.getCorrectCnt() + '/' + this.getTotalCnt();
  };

  this.getPercentage = function() {
    return this.getCorrectCnt() / this.getTotalCnt() * 100;
  };
  this.isCorrect = function(selected) {
    var correct = currentQuestion.isCorrect(selected);
    if (correct) {
      correctCnt++;      
    }
    return correct;
  };

  function Question(data, idx) {
    this.getRawData = function() {
      var URL_PREFIX = "http://www.mofa.go.jp/mofaj/area/",
          URL_SUFFIX = "/image/map.gif";
      return {
        no : idx + 1,
        idx : idx,
        page : 'page' + idx,
        btn : 'btn' + idx,
        imageUrl : URL_PREFIX + data.name + URL_SUFFIX,
        options : data.options
      };
    };

    this.checkOption = function(option) {
      if (option < 0 || data.options.length < option) {
        throw Error("illgal argument. [" + data.options + "] , " + option);
      }
    };

    /** 正解の判定をする。*/
    this.isCorrect = function(selected) {
      return (selected == data.correctAnswer);
    };

    this.checkOption(data.correctAnswer);
  }
}
