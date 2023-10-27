let sum = 0;
process.argv.forEach((element, index) => { 
	if (index >= 2) {
		sum += +element;
	}
});
console.log(sum);
