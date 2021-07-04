<template>
  <div id="app">
    <div class="content">
    <router-view/>
    </div> 
    <div class="bottom">
      <router-link to="/" tag="div">商品列表</router-link>
      <router-link to="/shopcart" tag="div">购物车</router-link>
    </div>
 </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
