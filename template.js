
(function() {
  var getNext = (function() {
    var i = 0;
    return function() {
      var data = {
        page: function() {
          return "page" + i;
        },
        btn: function() {
          return "btn" + i; 
        },
        options: [
          { optId: "1", option:"ドイツ" + i  },
          { optId: "2", option:"フランス" },
          { optId: "3", option:"オランダ" }
        ]
      };
      i++;
      return data;
    };
  })();
  var goNext = function() {
    var data = getNext(),
        btn = '#' + data.btn(),
        nextPage = '#' + data.page();
    $('#tmpl-page').tmpl(data).appendTo('body');

    $(btn).click(function(event) {
      goNext();
    });

    $.mobile.changePage(nextPage, {transition: 'flow'});      


  };


  goNext();
  
}());


