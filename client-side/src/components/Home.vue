<template>
  <div class="container customers">
    <div class="page-header">
      <!-- <h1>MANAGEMENST SYSTEMS</h1> -->
    </div>
    <div class="customer-content">
      <table>
        <thead>
          <th>FIRST NAME</th>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer">
            <td>{{customer.first_name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PostServices from "../services/postService.js";

export default {
  name: "home",
  data() {
    return {
      customers: []
    };
  },
  mounted() {
    this.getCustomers();
  },
  methods: {
    async getCustomers() {
      const response = await PostServices.fetchCustomers();
      if (response.data) {
        let data = response.data.data;
        data.map(current => this.customers.push(current));
      }
    }
  }
};
</script>

<style scope>
.customers .page-header {
  margin-top: 6em;
}
</style>
