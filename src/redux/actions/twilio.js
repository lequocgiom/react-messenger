import {
  GET_TWILIO_USER,
  GET_TWILIO_USER_ERROR,
  GET_TWILIO_CHANNEL,
  GET_TWILIO_CHANNEL_ERROR,
  FETCH_TWILIO_MESSAGES,
  FETCH_TWILIO_MESSAGES_ERROR,
} from "./types";
import com from "../../utils";
import Axios from "axios";
const Chat = require("twilio-chat");

export const getTwilioUser = () => async (dispatch) => {
  //   console.log("fetch conversation actions");
  try {
    const res = await Axios.get(
      `${com.root}/api/v1/twilio:generateJwt?email=voduykhanhnc@gmail.com`
    );

    const user = await Chat.Client.create(res.data.data);

    dispatch({
      type: GET_TWILIO_USER,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: GET_TWILIO_USER_ERROR,
      payload: err,
    });
  }
};

// export const selectTwilioChannel = (channelName) => async (dispatch) => {
//   dispatch({
//     type: SELECT_TWILIO_CHANNEL,
//     payload: channelName,
//   });
// };

export const getTwilioChannel = (user, channelName) => async (dispatch) => {
  try {
    const channel = await user.getChannelBySid(channelName);

    dispatch({
      type: GET_TWILIO_CHANNEL,
      payload: channel,
    });
  } catch (err) {
    dispatch({
      type: GET_TWILIO_CHANNEL_ERROR,
      payload: err,
    });
  }
};

export const fetchTwilioMessages = (channel) => async (dispatch) => {
  try {
    const messages = await channel.getMessages(40);
    dispatch({
      type: FETCH_TWILIO_MESSAGES,
      payload: messages,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: FETCH_TWILIO_MESSAGES_ERROR,
      payload: err,
    });
  }
};
