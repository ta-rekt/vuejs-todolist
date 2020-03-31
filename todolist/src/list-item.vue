<template>
  <div>
    <p> content: {{ data.text }} status: {{ complete }}</p>
    <button class="removeItem" v-on:click="$emit('remove-item', data)">remove item </button>
    <button class="markComplete" v-on:click="toggleComplete">mark complete </button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      complete: this.data.complete,
    }
  },
  methods: {
    toggleComplete: function() {
      this.complete = !this.complete;
    }
  }
}
</script>

<style>
</style>
