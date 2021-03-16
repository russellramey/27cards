/*jshint esversion: 6*/

/**
 * Shuffle array
 *
 * @param array
 * @return array
 *
**/
const shuffle = function(array) {
    // If array is passed
    if(array){
        // Sort array in random order
        let result = array.sort(() => Math.random() - 0.5);
        // Return first 27 items
        return result;
    }
};

// Export mixin
export default shuffle;
