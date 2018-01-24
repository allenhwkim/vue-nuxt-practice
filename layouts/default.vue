<template>
  <div>
    <navbar></navbar>
    <nuxt/> 
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  html { font-family: Arial, sans-serif; }
</style>
