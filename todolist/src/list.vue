<template>
  <div>
    <h1> {{listData}} </h1>
    <slot></slot>
  </div>
</template>

<script>

export default {
  // props: ['listData', 'listItemData'],
  data () {
    return {
      listData: "list title"
    }
  }
}
</script>

<style>
</style>
