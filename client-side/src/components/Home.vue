<template>
  <div class="container customers">
    <div class="page-header">
      <h1>MANAGEMENST SYSTEMS</h1>
    </div>
  </div>
</template>

<script>
// import Api from "../services/App";

import PostServices from "../services/postService.js";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.getPosts();
  },
  methods: {
  async getPosts () {

      const response = await PostServices.fetchPosts();
      console.log(response.data);
    }
  }
};
</script>



