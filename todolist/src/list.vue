<template>
  <div>
    <h3> {{ data.title }}</h3>
    <button class="removeList" v-on:click="$emit('remove-list', data)">remove list </button>
    <button class="hideList" v-on:click="toggleHideList" v-if="showList">hide list </button>
    <button class="showList" v-on:click="toggleHideList" v-if="!showList">show list </button>
    <section v-if="showList">
      <input type="text" v-model="newItemText" placeholder="new item" @keyup.enter="addItem"/>
      <ul>
        <list-item v-for="item in items" :data="item" v-on:remove-item="removeItem"></list-item>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  props: ['data'],
  data () {
    return {
      items: [],
      newItemText: "",
      showList: true
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
    },
    toggleHideList: function() {
      this.showList = !this.showList;
    }
  }
}
</script>

<style>
</style>
