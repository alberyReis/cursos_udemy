<template>
  <div id="app">
    <h1>Caculadora</h1>
    <CalcCalculator />
  </div>
</template>

<script>
import CalcCalculator from './main/CalcCalculator.vue'

export default {
  components: { CalcCalculator }
}
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/Roboto-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, #536976, #292e49);
}
</style>
