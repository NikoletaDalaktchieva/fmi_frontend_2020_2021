function tableCreate() {
  var data = [
	  ['A',"Power Output","3 Stars","80% \n 18 studies","Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto blanditiis cumque doloribus, eius enim est expercitationem harum itaque iure iusto magni nam nobis? Alias aspernatur deleniti deserunt ea veniam!"],
	  ['B',"Weight","4 Stars","100% \n 65 studies","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad corpois cumque, dignissimos eaque excepturi fuga in ipsa laudantium mollitia obcaecati. "]
  ]	

  var body = document.body;
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var j = 0; j < 2; j++) {
    var row = document.createElement("tr");

    for (var i = 0; i < 5; i++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(data[j][i]);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
  
  
    var btn = document.createElement("BUTTON"); 
	btn.innerHTML = "Swap rows";      
	btn.onclick	= function() {
		
	}
	
	body.appendChild(btn);  
}
tableCreate();