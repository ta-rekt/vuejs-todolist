<template>
  <div>
    <h1> {{ appData }} </h1>
    <list>
      <list-item></list-item>
    </list>
  </div>
</template>

<script>

export default {
  data () {
    return {
      appData: 'todolist manager',
      listData: 'list title',
      listItemData: 'list item pimp'
    }
  }
}
</script>

<style>
</style>
