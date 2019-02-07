import Api from "../services/App";

export default {
  fetchPosts() {
    return Api().get("/api/customers");
  }
};
