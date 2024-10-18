function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

    // Count the frequency of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i]; // Return the first non-repeated character
        }
    }

    // Step 3: If no non-repeated character found, return null
    return null;
} 
}

