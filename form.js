

var rIndex,
table = document.getElementById("table");

function add(){
	var table = document.getElementById("table"),
	newRow = table.insertRow(table.length),
	cell1 = newRow.insertCell(0),
	cell2  =newRow.insertCell(1),
	cell3 = newRow.insertCell(2),
	cell4 = newRow.insertCell(3),
	cell5 = newRow.insertCell(4),
	fname =document.getElementById("fname").value,
	lname=document.getElementById("lname").value,
	age =document.getElementById("age").value,
	mobilenumber=document.getElementById("mobilenumber").value,
	emailid=document.getElementById("emailid").value;
	cell1.innerHTML=fname;
	cell2.innerHTML=lname;
	cell3.innerHTML=age;
	cell4.innerHTML=mobilenumber;
	cell5.innerHTML=emailid;


selectedRowToInput();
}

function selectedRowToInput(){
	var rIndex,table = document.getElementById("table");
	for(var i = 1; i < table.rows.length; i++){
		table.rows[i].onclick = function()
		{
			rIndex = this.rowIndex;
			document.getElementById("fname").value= this.cells[0].innerHTML;
			document.getElementById("lname").value= this.cells[1].innerHTML;
			document.getElementById("age").value= this.cells[2].innerHTML;
			document.getElementById("mobilenumber").value= this.cells[3].innerHTML;
			document.getElementById("emailid").value= this.cells[4].innerHTML;
			
		};
	}
}
selectedRowToInput();

function eddit(){
	// var table=document.getElementById("table");
	var fname = document.getElementById("fname").value,
		lname = document.getElementById("lname").value,
		age= document.getElementById("age").value,
		mobilenumber= document.getElementById("mobilenumber").value,
		emailid = document.getElementById("emailid").value;

		table.rows [rIndex].cells[0].innerHTML = fname;
		table.rows [rIndex].cells[0].innerHTML = lname;
		table.rows [rIndex].cells[0].innerHTML = age;
		table.rows [rIndex].cells[0].innerHTML = mobilenumber;
		table.rows [rIndex].cells[0].innerHTML = emailid;
}

function remove(){

	table.deleteRow(rIndex);
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("age").value = "";
	document.getElementById("mobilenumber").value = "";
	document.getElementById("emailid").value = "";
}












