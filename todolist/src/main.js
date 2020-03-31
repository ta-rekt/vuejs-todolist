import Vue from 'vue'
import App from './App.vue'
import List from './list.vue'
import ListItem from './list-item.vue'

Vue.component('list', List);
Vue.component('list-item', ListItem);

new Vue({
  el: '#app',
  render: h => h(App),
})
