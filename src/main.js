/*jshint esversion: 6*/
import Vue from 'vue';
import App from './App.vue';
import utilities from './mixins';

Vue.config.productionTip = false;

// Add global mixins from ../mixins/index.js
// Access in components with $utilites.METHODNAME
Vue.use({
    install(){
        Vue.utilities = utilities;
        Vue.prototype.$utilities = utilities;
    }
});

// Initiate Vue
new Vue({
  render: h => h(App),
}).$mount('#app');
