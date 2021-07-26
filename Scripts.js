function addTable(){
    document.getElementById("dynamicTable").innerHTML = ""
    var myTableDiv = document.getElementById("dynamicTable");
  
    var table = document.createElement('table');
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
  
    for (var i = 0; i < row; i++) {
      var tr = document.createElement('tr');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < column; j++) {
        var td = document.createElement('td');

        td.appendChild(document.createTextNode(""));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
}