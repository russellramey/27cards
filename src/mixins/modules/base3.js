/*jshint esversion: 6*/

/**
 * Shuffle array
 *
 * @param array
 * @return array
 *
**/
const base3 = function(int) {
    // Divide integer by 3, save result as base
    let base = Math.floor(int / 3);
    // Divide integer by 3, save remainder as remainder
    let remainder = Math.floor(int % 3);
    // Create a result array with base, remainder
    let result = [base, remainder];
    // Return result
    return result;
};

// Export mixin
export default base3;
