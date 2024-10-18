function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the frequency of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i]; // Return the first non-repeated character
        }
    }

    // If no non-repeated character found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
