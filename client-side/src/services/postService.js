import Api from "../services/App";

export default {
  fetchCustomers() {
    return Api().get("/api/customers");
  }
};
