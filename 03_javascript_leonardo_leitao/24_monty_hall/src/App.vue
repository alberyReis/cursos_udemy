<template>
  <div id="app">
    <h1>Problema de MontyHall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="foportsAmount">Quantas portas?</label>
        <input type="text" id="portasAmount" size="3" v-model.number="portsAmount">
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual a porta premiada?</label>
        <input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
      </div>
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false"></button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <CompDoor :hasGift="i === selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import CompDoor from './components/CompDoor.vue';

export default {
  name: 'App',
  components: { CompDoor },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: 1,
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  color: white;
  background: linear-gradient(to right, #58518d, #155799);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000000;
  background-color: #000444;
  padding: 20px;
  margin-bottom: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  display: flex;
  align-self: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
