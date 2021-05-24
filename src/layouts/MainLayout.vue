<template>
    <div>
        <app-header />
        <main class="container">
            <router-view/>
        </main>
        <app-footer />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default {
  name: "MainLayout",

  components: {
    AppHeader,
    AppFooter,
  }
}

</script>

<style lang="less">
 @import "../styles/main";
</style>