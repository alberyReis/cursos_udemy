<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary">
        <v-toolbar-title>Most Used Words</v-toolbar-title>
      </v-app-bar>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: { HomePage }
}
</script>
