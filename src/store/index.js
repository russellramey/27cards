/*jshint esversion: 6*/
// Imports
import Cards from './modules/cards';
// Store object
const store = {
    cards: {
        deck: Cards,
        set: [],
        stacks: [],
    },
    user:{
        number: 1,
        stack: [],
        stack_order: [],
        card: null,
    },
    status:{
        step: 1,
        loading: false
    }
};
// Export
export default store;
