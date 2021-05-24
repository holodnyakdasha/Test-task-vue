<template>
  <header class="header">
      <h5>Products List</h5>
      <router-link :to="{ name: 'form'}"> Form</router-link>
  </header>
</template>

<script>

export default {
  name: "AppHeader"
}

</script>

<style lang="less">
 @import "../styles/header";
</style>