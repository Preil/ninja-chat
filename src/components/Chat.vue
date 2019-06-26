<template>
  <div class="chat container">
    <h2>Chat</h2>
    <h3>Hello {{this.name}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    props: ['name'],
    data() {
      return {}
    }
  }
</script>

<style>

</style>
