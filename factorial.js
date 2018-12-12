function findFactorial(number){
       
		var n= document.getElementById("number").value;
		var findFactorial = 1;
		
		for (i = 1; i <= n; i++){	
			findFactorial = findFactorial * i;

			document.write(findFactorial);
           		}
	}



console.log("findFactorial");