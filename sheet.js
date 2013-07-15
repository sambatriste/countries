function getSheet(sheet_url, callback) {
  var query = new google.visualization.Query(sheet_url);
  query.setQuery('select *');
  query.send(function(response) {
    if (response.isError()) {
      alert('error: ' + response.getMessage());
      return;
    }
    var data = response.getDataTable();
    var rowNum = data.getNumberOfRows();
    var obj = [];
    for (var i = 0; i < rowNum; i++) {
      var name = data.getValue(i, 0);
      var company = data.getValue(i, 1);
      var year = data.getValue(i, 2);
      obj.push(
        {
          "name": name,
          "company": company,
          "year": year
        }
      );
    }
    callback(obj);
  });
}