import React, { Component } from "react";
import Messenger from "../Messenger";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../redux/store";
import com from "../../utils";

const Chat = require("twilio-chat");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twilioUser: null,
    };
  }

  componentDidMount() {
    this.handleTwilioFlow();
  }

  handleTwilioFlow = () => {
    axios
      .get(`${com.root}/api/v1/twilio:generateJwt?email=voduykhanhnc@gmail.com`)
      .then((result) => {
        Chat.Client.create(result.data.data).then((user) => {
          // console.log("twilio user:", user);
          this.setState({ twilioUser: user });
        });
      })
      .catch((e) => console.log("get twilio jwt error: ", e));
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Messenger />
        </div>
      </Provider>
    );
  }
}

export default App;
