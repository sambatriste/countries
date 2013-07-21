var COUNTRIES = COUNTRIES || {};


(function() {

  var utils = {
    random: function(max) {
      return parseInt(Math.random() * max);
    },
    generateSequence: function(max) {
      var seq = [],
          i;
      for (i = 0; i < max; i++) {
        seq.push(i);
      }
      return seq;
    },
    randomNumbers: function(max) {
      var seq = utils.generateSequence(max);
      return this.shuffle(seq);
    },
    shuffle: function(array) {
      var ret = [],
          max = array.length,
          copied = this.copyArray(array),
          idx,
          i;
      for (i = 0; i < max; i++) {
        idx = this.random(copied.length);
        ret.push(copied[idx]);
        copied.splice(idx, 1);
      }
      return ret;
    },
    copyArray: function(orig) {
      var copied = [],
          i;
      for (i = 0; i < orig.length; i++) {
        copied.push(orig[i]);
      }
      return copied;
    }
    
  };      
  
  COUNTRIES.utils = utils;
  
}());
