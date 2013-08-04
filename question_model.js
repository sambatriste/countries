var COUNTRIES = COUNTRIES || {};

(function() {
  'use strict';
  
  var Questions = function(data) {
    this.data = data;
    this.idx = 0;
    this.correctCnt = 0;
    this.currentQuestion = null;
  };

  Questions.prototype.nextQuestion = function() {
    var data = this.data[this.idx];
    if (data === undefined) {
      return undefined;
    }
    this.currentQuestion = new COUNTRIES.Question(data, this.idx);
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
  COUNTRIES.Questions = Questions;
}());

(function() {
  'use strict';
  
  var Question = function(data, idx) {
    this.data = data;
    this.idx = idx;
  };

  Question.prototype.generateOptions = function() {
    var that = this;
    var options = (function() {
      var ret = [],
          i = 0,
          opts = that.data.options;

      ret.push(that.data.answer); // 答え
      jQuery.each(opts, function(i, e) {
        ret.push(opts[i]);       // 間違いの選択肢
      });
      return ret;
    }());
    return COUNTRIES.utils.shuffle(options);
  };
    
  /** 正解の判定をする。*/
  Question.prototype.isCorrect = function(selected) {
    return (selected === this.data.answer);
  };

  COUNTRIES.Question = Question;
  
}());

