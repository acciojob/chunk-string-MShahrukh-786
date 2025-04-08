function chunkString(str, chunkLength) {
    // Step 1: Handle edge cases
    if (str === null) return [];
    if (chunkLength <= 0) return []; // Optional: handle invalid chunk length

    const chunks = [];

    // Step 2: Loop through the string
    for (let i = 0; i < str.length; i += chunkLength) {
        // Step 3: Create chunks
        chunks.push(str.substring(i, i + chunkLength));
    }

    // Step 4: Return the result
    return chunks;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
