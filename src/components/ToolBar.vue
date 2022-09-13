<template>
  <div class="header">
    <h1>NEWS</h1>
    <router-link to="/news">News </router-link>
    <router-link to="/ask"> Ask </router-link>
    <router-link to="/jobs"> Jobs </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  background: #42b883;
  display: flex;
  padding: 20px 30px;
  color: #fff;
  font-size: 20px;
  align-content: center;
}
.header h1 {
  font-size: 23px;
  font-weight: bold;
  margin: 0 45px 0 0;
  font-weight: 800;
}
.header a {
  color: #fff;
  margin: 0 15px;
  font-size: 22px;
  text-decoration: none;
  font-weight: 500;
  font-family: Helvetica;
}
.header .router-link-exact-active {
  color: #35495e;
  font-weight: 600;
}
</style>
