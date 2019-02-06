<template>
  <div class="container customers">
    <div class="page-header">
      <h1>MANAGEMENST SYSTEMS</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },

  methods: {
    getCustomers() {
      axios.get("http://localhost:3000/api/customers"),
        then(res => {
          console.log(res.body);
        });
    }
  }
};
</script>


