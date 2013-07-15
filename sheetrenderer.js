google.load('visualization', '1', {'packages':['table']});
$(document).bind('pageinit', function() {
  var url = "https://spreadsheets.google.com/tq?key=0AoKryNA0_TmmdGxIS1R0QjU1bWVmWkxNanRmWXBBVUE";

  getSheet(url, function(json) {
    var str = "";
    $.each(json, function() {
      str += '<li><h2>' + this["name"] + '</h2><p>' +
        this["company"] + '(' + this["year"] + ')' + '</p></li>';
    });
    $('#list').append(str);
    $('#list').listview('refresh');
  });



  
 // $('div').live('pageshow', function() {
 //    getSheet(url, function(json) {
 //      var str = "";
 //      $.each(json, function() {
 //        str += '<li><h2>' + this["name"] + '</h2><p>' +
 //          this["company"] + '(' + this["year"] + ')' + '</p></li>';
 //      });
 //      $('#list').append(str);
 //      $('#list').listview('refresh');
 //    });
 // });
});



