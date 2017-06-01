var countdownGenerator = function (x) {
  var count = 0; 
  var blastoff = '';


  return function() {
  	if (count < 3) {
  		count += 1;
  		return "T-minus " + count + "..."
  	} else {
  		if (blastoff == '') {
  			blastoff += "Blast Off!"
  		return blastoff;
  	} else {
  		
  	 return "Rockets already gone, bub!"
  	}
  		
  	}

  }
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!