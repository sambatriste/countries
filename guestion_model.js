var COUNTRIES = {};

(function() {
  var Questions = function(data) {
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
 
  var Question = function(data, idx) {
    this.data = data;
    this.idx = idx;
  };

  Question.prototype.generateOptions = function() {
    var that = this;
    var options = (function() {
      var all = [],
          i = 0,
          opts = that.data.options;

      all.push(that.data.answer);
      for (; i < opts.length; i++) {
        var e = opts[i];
        all.push(e.option);
      }
      return all;
    }());
    var shuffle = function(options) {
      var disorderedNums = (function(count) {
        var nums = new SimpleSet(),
            no;
        while (nums.contents.length < count) {
          no = parseInt(Math.random() * count);
          nums.add(no);
        }
        return nums.contents;
      }(options.length)),
          shuffled = [],
          i;
      for (i = 0; i < disorderedNums.length; i++) {
        shuffled.push(options[disorderedNums[i]]);
      }
      return shuffled;
    };
    return shuffle(options);
  };
    
  /** 正解の判定をする。*/
  Question.prototype.isCorrect = function(selected) {
    return (selected == this.data.answer);
  };


  Question.prototype.getRawData = function() {
    var URL_PREFIX = "http://www.mofa.go.jp/mofaj/area/",
        URL_SUFFIX = "/image/map.gif",
        that = this;
    return {
      no : this.idx + 1,
      idx : this.idx,
      page : 'page' + this.idx,
      btn : 'btn' + this.idx,
      imageUrl : URL_PREFIX + this.data.name + URL_SUFFIX,
      options : (function() {
        var orig = that.generateOptions(),
            options = [],
            i = 0;
        for (; i < orig.length; i++) {
          options.push({ option:orig[i] });
        }
        return options;
      }())
    };
  };
  COUNTRIES.Question = Question;
  
  var SimpleSet = function() {
    this.contents = [];
  };

  SimpleSet.prototype.add = function(e) {
    if (this.contains(e)) {
      return;
    }
    this.contents.push(e);
  };

  SimpleSet.prototype.contains = function(e) {
    var i = 0,
    length = this.contents.length;
    for (; i < length; i++) {
      if (this.contents[i] === e) {
        return true;
      }
    }
    return false;
  };
  
}());

