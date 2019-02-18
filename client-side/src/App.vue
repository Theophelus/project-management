<template>
  <div id="app">
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a href="../" class="navbar-brand">DASHBOARD</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">
                <i class="fas fa-plus"></i> Add
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style scoped>
#app {
  background-color: #f8f9f9;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  font-family: "Roboto", sans-serif;
}
.fas {
  color: #f75940;
}
</style>

