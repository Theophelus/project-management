<template>
  <div class="container customerDetails">
    <div class="page-header">
      <h4>
        {{customer.first_name}} {{customer.last_name}}
        <span class="float-right overflow-hidden">
          <i class="fas fa-trash" style="font-size:18px;color: #FF3C38;" v-on:click="deleteUser"></i>
        </span>
      </h4>
    </div>
    <!-- <div class="row"> -->
    <div class="list-class">
      <div class="col-md-12 col-md-push-12">
        <div
          class="form-feature form-feature-sm animate-box fadeInLeft animated"
          data-animate-effect="fadeInLeft"
        >
          <div class="form-icon">
            <i class="fas fa-phone"></i>
          </div>
          <div class="form-text">
            <p>
              <a href="tel://">+27 {{customer.phone}}</a>
            </p>
          </div>
        </div>
        <div
          class="form-feature form-feature-sm animate-box fadeInLeft animated"
          data-animate-effect="fadeInLeft"
        >
          <div class="form-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="form-text">
            <p>
              <a href="mailto:">{{customer.email}}</a>
            </p>
          </div>
        </div>
        <div
          class="form-feature form-feature-sm animate-box fadeInLeft animated"
          data-animate-effect="fadeInLeft"
        >
          <div class="form-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="form-text">
            <p>
              <a href="mailto:">{{customer.addresses}}</a>
            </p>
          </div>
        </div>
        <div
          class="form-feature form-feature-sm animate-box fadeInLeft animated"
          data-animate-effect="fadeInLeft"
        >
          <div class="form-icon">
            <i class="fas fa-city"></i>
          </div>
          <div class="form-text">
            <p>
              <a href="mailto:">{{customer.city}}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "../services/App.js";
export default {
  name: "customer",
  data() {
    return {
      customer: ""
    };
  },

  mounted() {
    this.singleUser();
  },
  methods: {
    singleUser() {
      let vm = this;
      Axios()
        .get(`/api/customers/${vm.$route.params.id}`)
        .then(response => {
          if (response.data) {
            let data = response.data.data;
            data.map(current => (vm.customer = current));
          }
        })
        .catch(error => {
          console.log(`An error occured ${error}`);
        });
    },
    //Define a function to Delete a specific user
    deleteUser() {
      let vm = this;
      Axios()
        .delete(`/api/customers/delete/${vm.$route.params.id}`)
        .then(response => console.log(response.data.data));
    }
  }
};
</script>
<style scoped>
.customerDetails {
  padding-top: 2em;
  clear: both;
  width: 100%;
  display: block;
}
.customerDetails .page-header {
  margin-top: 2em;
  box-shadow: 0 4px 2px -2px #f75940;
  border-bottom: 1px solid #1a535c;
}
.list-class {
  margin-top: 30px;
}
.form-feature {
  text-align: left;
  width: 100%;
  float: left;
  margin-bottom: 40px;
  position: relative;
}

.form-feature .form-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  display: table;
  text-align: center;
  background: #7c7a7a;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  border-radius: 2px;
}

.form-feature .form-icon i {
  display: table-cell;
  vertical-align: middle;
  color: #f75940;
  font-size: 40px;
  height: 100px;
}

a {
  color: #f75940;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.form-feature.form-feature-sm .form-text {
  margin-top: 30px;
}

.form-feature .form-text {
  padding-left: 120px;
  width: 100%;
}
</style>
