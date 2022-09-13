<template>
  <div id="app">
    <Toolbar />
    <transition name="page">
      <router-view />
    </transition>
    <NewsSpinner :loading="loadingStatus" />
  </div>
</template>

<script>
import Toolbar from './components/ToolBar.vue'
import NewsSpinner from './components/NewsSpinner.vue'
import bus from '@/utils/bus.js'

export default {
  components: {
    Toolbar,
    NewsSpinner
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #42b883;
}
li {
  list-style: none;
}
#app {
  font-family: 'Montserrat', sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.text-container {
  padding: 20px 40px;
}
.text-container p {
  margin-bottom: 20px;
}
.text-container a {
  color: #333;
  font-size: 20px;
  font-weight: 500;
}
.text-container a:hover {
  color: #42b883;
}
.text-container span {
  display: block;
  margin-top: 5px;
}

/* Router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
