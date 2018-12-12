
function checking(year){
	var year=document.getElementById("year").value;
	if((0==year%400)&&(0!=year%100)||(0==year%4)){
		document.write("this is leapyear");
	}
	else{
		document.write("this is not leapyear");
	}
}

console.log("year");
  
