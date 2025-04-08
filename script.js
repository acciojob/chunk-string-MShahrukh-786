function stringChop(str, size) {
  // your code here
	function chunkString(str, chunkLength) {
    // Handle null input
    if (str === null) return [];

    const result = [];

    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }

    return result;
}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
