<template>
  <div class="add">
    <div class="container">
      <div class="page-header">
        <h4>Add Customers</h4>
      </div>
      <form v-on: submit="addCustomer">
        <div class="row">
          <div class="col-md-7 col-md-pull-5">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                name="full_name"
                v-model="full_name"
              >
            </div>
            <div class="form-group">
              <input
                name="phone"
                class="form-control"
                v-model="phone"
                type="text"
                placeholder="Phone"
              >
              <!-- <span class="error" v-if="errors.has('phone')">{{ errors.first('phone') }}</span> -->
            </div>
            <div class="form-group">
              <textarea
                name="address"
                id="message"
                cols="30"
                rows="20"
                class="form-control"
                placeholder="addree"
                v-model="address"
              ></textarea>
              <!-- <span class="error" v-if="errors.has('messages')">{{ errors.first('messages') }}</span> -->
            </div>
          </div>
          <div class="col-md-5 col-md-push-6">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Fast Name"
                name="last_name"
                v-model="last_name"
              >
              <!-- <span class="error" v-if="errors.has('email')">{{ errors.first('email') }}</span> -->
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                name="email"
                v-model="email"
              >
              <!-- <span class="error" v-if="errors.has('email')">{{ errors.first('email') }}</span> -->
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="City" name="city" v-model="city">
              <!-- <span class="error" v-if="errors.has('email')">{{ errors.first('email') }}</span> -->
            </div>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary btn-send-message" value="Send Message">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "../services/App.js";
export default {
  name: "add",
  data() {
    return {
      customer: {},
      full_name: '',
      last_name: '',
      phone: '',
      email: '',
      address: '',
      city: ''
    };
  },

  methods: {
    addCustomer(e) {
      //Define a variable to hold this
      let self = this;
      //check if all fields are filled
      if (
        !self.first_name ||
        !self.last_name ||
        !self.phone ||
        !self.email ||
        !self.address ||
        !self.city
      ) {
        console.log("Please fill all fields");
      } else {
        let customers = {
          first_name: self.first_name,
          last_name: self.last_name,
          phone: self.phone,
          email: self.email,
          address: self.address,
          city: self.city
        };
        axios()
          .post("/api/customers/add", customers)
          .then(response => console.log(response.data));
      }

      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.add .page-header {
  margin-top: 1em;
}

.add {
  background-color: #f8f9f9;
  padding-top: 4em;
  /* padding-bottom: 2em; */
  clear: both;
  width: 100%;
  height: vh;
  display: block;
}

.heading-meta {
  margin-bottom: 5px;
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: #999999;
  font-weight: 500;
  letter-spacing: 5px;
}

.form-heading {
  font-size: 18px;
  margin-bottom: 4em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
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
  background: rgba(0, 0, 0, 0.03);
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

.form-group {
  margin-bottom: 30px;
}

.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 54px;
  font-size: 16px;
  font-weight: 400;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
}

.form-control:active,
.form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #f75940;
}

#message {
  height: 130px;
}

.btn-primary {
  background: #f75940;
  color: #fff;
  border: 2px solid #f75940;
}

.btn {
  margin-right: 4px;
  margin-bottom: 4px;
  font-family: "Quicksand", Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  border-radius: 2px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  padding: 8px 15px !important;
}
/* Error Messages */
span.error {
  color: #9f3a38;
}
</style>





