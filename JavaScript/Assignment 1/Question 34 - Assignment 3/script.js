function tableCreate() {

    var rownum =   parseInt(prompt("Enter number of rows",1));
    var colnum =  parseInt(prompt("Enter number of columns",1));
    var table = document.createElement("table");
        table.setAttribute("border","1")
        document.body.appendChild(table);

        for(i = 1; i <= rownum; i++){
            var tr =  document.createElement("tr");
            table.appendChild(tr);
            for(j = 1; j <= colnum; j++){
                var cell = document.createElement("td");
                cell.setAttribute("id","("+i+","+j+")");
                var t = document.createTextNode("("+i+","+j+")");
                
                cell.appendChild(t);
                tr.appendChild(cell);
            }
        }
}