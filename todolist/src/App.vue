<template>
  <div>
    <h1> {{ appTitle }} </h1>
    <input type="text" v-model="newListTitle" placeholder="new list" @keyup.enter="addList(newListTitle)"/>
    <ul>
      <list v-for="list in lists" :data="list" v-on:remove-list="removeList"></list>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      appTitle: 'todolist manager',
      lists: [],
      newListTitle: ""
    }
  },

  methods: {
    addList: function() {
      this.lists.push({
        id: this.lists.length +1,
        title: this.newListTitle,
        length: 0
      })
    },
    removeList: function(list) {
      this.lists.splice(this.lists.indexOf(list), 1);
    }
  }
}
</script>

<style>
</style>
