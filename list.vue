<template>
  <header class="listHeader">
    <h1> {{ listTitle }} </h1>
    <button class="edit" v-on:click="toggleEditTitle" v-if="!editTitle">edit title</button>
    <input type="text" v-model="listTitle" v-if="editTitle" @keyup.enter="toggleEditTitle"/>
  </header>
</template>

<script>
</script>

<style>
</style>
