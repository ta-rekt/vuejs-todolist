<template>
  <div :class="{complete: complete}">
    <span>
      <p> {{ data.text }}</p>
    </span>
    <button class="removeItem" v-on:click="$emit('remove-item', data)">remove item </button>
    <button class="markComplete" v-on:click="toggleComplete" v-if="!complete">mark complete </button>
    <button class="markIncomplete" v-on:click="toggleComplete" v-if="complete">mark incomplete </button>
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
span {
  background: red;
  display: inline-block;
  padding: 10px;
  color: #fff;
  margin: 10px 10px;
}

.complete span{
  background: green
}
</style>
