import axios from "axios";

const com = {};

com.root = "https://0e53d90ad5af.ngrok.io";

com.setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default com;
