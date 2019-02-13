import Api from "../services/App";

export default {
  fetchCustomers() {
    return Api().get("/api/customers");
  },

  addCustomer(params) {
    return Api().post("/api/customers/add", params);
  }
};
