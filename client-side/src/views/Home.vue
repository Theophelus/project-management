<template>
  <div class="home">
    <!-- <div class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div class="container">
        <a href="../" class="navbar-brand">DASHBOARD</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link> 
              <!-- <a class="nav-link" href="../help/">Help</a> -->
            <!-- </li> -->
            <!-- <li class="nav-item"> -->
               <!-- <router-link to="/about" class="nav-link">About</router-link> -->
              <!-- <a class="nav-link" href="http://blog.bootswatch.com">Blog</a> -->
            <!-- </li> -->
          <!-- </ul> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->
  </div> 
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "home",
  components: {
    Dashboard
  }

};
</script>
