function stringChop(str, size) {
  // your code here
	const arr = []
	
	if (!str)return arr;

	if (str.length <= size){
		arr.push(str);
		return arr;
	}

	for (let i = 0; i < str.length; i += size){
		arr.push(str.slice(i, i + size));
	}

	return arr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
