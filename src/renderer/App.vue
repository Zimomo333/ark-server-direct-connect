<template>
  <div id="app">
    <a-button type="primary" size="large">test</a-button>
    <h1>PVE</h1>
      <a href="steam://connect/zimomo.hopto.org:27015">仙境</a>
      <a href="steam://connect/zimomo.hopto.org:27016">孤岛</a>
      <a href="steam://connect/zimomo.hopto.org:27017">中心岛</a>
      <a href="steam://connect/zimomo.hopto.org:27018">瓦尔盖罗</a>
      <a href="steam://connect/zimomo.hopto.org:27019">灭绝</a>
      <a href="steam://connect/zimomo.hopto.org:37015">畸变</a>
      <a href="steam://connect/zimomo.hopto.org:37016">焦土</a>
      <a href="steam://connect/zimomo.hopto.org:37017">创世纪</a>
      <a href="steam://connect/zimomo.hopto.org:37021">创世纪2</a>
      <a href="steam://connect/zimomo.hopto.org:37018">水晶岛</a>
    <h1>PVP角斗场</h1>
      <a href="steam://connect/zimomo.hopto.org:37019">中心岛</a>
      <a href="steam://connect/zimomo.hopto.org:37020">孤岛</a>
  </div>
</template>

<script>
export default {
  name: 'ark-server-direct-connect',
  components: {}
}
</script>

<style>
html, body{
  margin: 0;
}
#app {
  margin: 0;
}
h1 {
  font-size: 60px;
  text-align: center;
  color: red;
}
a {
  font-size: 60px;
  width: 400px;
  text-align: center;
}
div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
}
</style>
