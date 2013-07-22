var COUNTRIES = COUNTRIES || {};

(function() {

  COUNTRIES.QuestionView = function(question) {
    var URL_PREFIX = "http://www.mofa.go.jp/mofaj/area/",
        URL_SUFFIX = "/image/map.gif";
    this.no = question.idx + 1;
    this.idx = question.idx;
    this.page = 'page' + question.idx;
    this.btn = 'btn' + question.idx;
    this.imageUrl = URL_PREFIX + question.data.name + URL_SUFFIX;
    this.options = (function() {
      var orig = question.generateOptions(),
          options = [],
          i = 0;
      for (; i < orig.length; i++) {
        options.push({ option:orig[i] });
      }
      return options;
    }());
  };


}());


