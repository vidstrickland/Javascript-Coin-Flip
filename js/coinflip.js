coinPos = "heads";
flipVal = 0;

function coinFlip(){

	flipVal = Math.random();

	if((flipVal > .5) && coinPos == "heads"){
		console.log("TEST INFO - COINPOS: " + coinPos + " | FLIPVAL: " + flipVal);
		console.log("Flipped from Heads to Heads!");
		coinPos = "heads";
		document.getElementById("theCoin").src = "images/coinHtoH.gif";
	}else if((flipVal <= .5) && coinPos == "heads"){
		console.log("TEST INFO - COINPOS: " + coinPos + " | FLIPVAL: " + flipVal);
		console.log("Flipped from Heads to Tails!");
		coinPos = "tails";
		document.getElementById("theCoin").src = "images/coinHtoT.gif";
	}else if((flipVal > .5) && coinPos == "tails"){
		console.log("TEST INFO - COINPOS: " + coinPos + " | FLIPVAL: " + flipVal);
		console.log("Flipped from Tails to Heads!");
		coinPos = "heads";
		document.getElementById("theCoin").src = "images/coinTtoH.gif";
	}else if((flipVal <= .5) && coinPos == "tails"){
		console.log("TEST INFO - COINPOS: " + coinPos + " | FLIPVAL: " + flipVal);
		console.log("Flipped from Tails to Tails!");
		coinPos = "tails";
		document.getElementById("theCoin").src = "images/coinTtoT.gif";
	}else{
		console.log("TEST INFO - COINPOS: " + coinPos + " | FLIPVAL: " + flipVal);
		console.log("Something unexpected happened!");
	}
}