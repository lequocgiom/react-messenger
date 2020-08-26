import axios from "axios";

const com = {};

com.root = "https://4f5fa02ddb91.ngrok.io";

com.setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default com;
