/*jshint esversion: 6*/

/**
 * Shuffle array
 *
 * @param array
 * @return array
 *
**/
const deal = function(array) {
    // If array is passed
    if(array){
        let index = 0;
        let result = [
            [],
            [],
            []
        ];
        // For each item in array
        array.forEach(item => {
            // If index is larger than 2, reset
            if(index > 2){
                index = 0;
            }
            // Push card to stack
            result[index].push(item);
            // Increase index
            index++;
        });
        // Return sorted stacks
        return result;
    }
};

// Export mixin
export default deal;
