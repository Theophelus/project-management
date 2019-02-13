<template>
  <div class="customers">
    <div class="container">
      <div class="page-header">
        <h4>MANAGE CUSTOMERS</h4>
      </div>
      <br>
      <div class="customer-content">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer">
              <td>{{customer.id}}</td>
              <td>{{customer.first_name}}</td>
              <td>{{customer.last_name}}</td>
              <td>{{customer.phone}}</td>
              <td>{{customer.email}}</td>
              <td>{{customer.addresses}}</td>
              <td>{{customer.city}}</td>
              <td> 
                <router-link class="btn btn-secondary" style="background-color:#f75940" v-bind:to="'/customer/'+customer.id">Quick View</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../services/App.js";
// import PostServices from "../services/postService.js";

export default {
  name: "home",
  data() {
    return {
      customers: []
    };
  },
  mounted() {
    axios()
      .get("/api/customers")
      .then(response => {
        if (response.data) {
          let data = response.data.data;
          data.map(current => this.customers.push(current));
        }
      });
  }
};
</script>

<style scope>
.customers {
  /* background-color: #f8f9f9; */
  padding-top: 2em;
  /* padding-bottom: 2em; */
  clear: both;
  width: 100%;
  height: 100%;
  display: block;
}
.customers  .page-header {
  margin-top: 2em;
  box-shadow: 0 4px 2px -2px #f75940;
  border-bottom: 1px solid #1a535c;
}
</style>
