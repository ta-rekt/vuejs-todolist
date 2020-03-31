<template>
  <div>
    <h3> title: {{ data.title }} id: {{ data.id }} </h3>
    <button class="removeList" v-on:click="$emit('remove-list', data)">remove list </button>
    <input type="text" v-model="newItemText" placeholder="new item" @keyup.enter="addItem"/>
    <ul>
      <list-item v-for="item in items" :data="item" v-on:remove-item="removeItem"></list-item>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['data'],
  data () {
    return {
      items: [],
      newItemText: ""
    }
  },
  methods: {
    addItem: function() {
      this.items.push({
        text: this.newItemText,
        complete: false
      })
    },
    removeItem: function(item) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
}
</script>

<style>
</style>
