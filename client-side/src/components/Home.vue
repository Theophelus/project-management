<template>
  <div class="container customers">
    <div class="page-header">
      <h1>MANAGEMENST SYSTEMS</h1>
    </div>
  </div>
</template>

<script>
// import axios from "../services/App";

import PostServices from "../services/postService.js";
export default {
  name: "home",
  data() {
    return {
      customers: []
    };
  },
  mounted() {
    // this.fetchPosts();
    this.getPosts();
  },
  methods: {
    // fetchPosts() {
    //   axios.get("/api/customers").then(response => console.log(response.data));
    // }
    async getPosts () {

      const response = await PostServices.fetchPosts();
      console.log(response.data);
      this.customers = response.data;
    }
  }
};
</script>

<style scope>

</style>