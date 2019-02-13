<template>
  <div class="container add">
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
              placeholder="Name"
              name="name"
              v-model="name"
            >
            <!-- <span class="error"</span> -->
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
              name="messages"
              id="message"
              cols="30"
              rows="20"
              class="form-control"
              placeholder="Message"
              v-model="messages"
            ></textarea>
            <!-- <span class="error" v-if="errors.has('messages')">{{ errors.first('messages') }}</span> -->
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary btn-send-message" value="Send Message">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "../services/App.js";
export default {
  name: "add",
  data() {
    return {
      customer: {}
    };
  },

  methods: {
    addCustomer(e) {
      //Define a variable to hold this
      let self = this;
      //check if all fields are filled
      if (
        !self.customer.first_name ||
        !self.customer.last_name ||
        !self.customer.phone ||
        !self.customer.email ||
        !self.customer.address ||
        !self.customer.city
      ) {
        console.log("Please fill all fields");
      } else {
        let customers = {
          first_name: self.customer.first_name,
          last_name: self.customer.last_name,
          phone: self.customer.phone,
          email: self.customer.email,
          address: self.address.address,
          city: self.customer.city
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
  margin-top: 3em;
}

.form-contact {
	background-color: #F8F9F9;
	padding-top: 4em;
	/* padding-bottom: 2em; */
	clear: both;
	width: 100%;
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
	color: #F75940;
	font-size: 40px;
	height: 100px;
}

a {
	color: #F75940;
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
	border-color: #F75940;
}

#message {
	height: 130px;
}

.btn-primary {
	background: #F75940;
	color: #fff;
	border: 2px solid #F75940;
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
	color: #9F3A38;
  }
</style>





