var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello pimps'
  }
})

var app2 = new Vue({
  el:'#app-2',
  data: {
    message: 'page loaded on '+ new Date().toLocaleString()
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'racecar hey dig a hole'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'apples'},
      { id: 1, text: 'apple juice'},
      { id: 2, text: 'apple cake'}
    ]
  }
})
