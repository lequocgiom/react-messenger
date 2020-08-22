import {
  GET_TWILIO_USER,
  GET_TWILIO_USER_ERROR,
  FETCH_TWILIO_MESSAGES,
  FETCH_TWILIO_MESSAGES_ERROR,
  GET_TWILIO_CHANNEL,
  GET_TWILIO_CHANNEL_ERROR,
} from "../actions/types";

const initialState = {
  twilioUser: [],
  error: {},
  loading: true,
  messages: [],
  currentChannel: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TWILIO_USER:
      return {
        ...state,
        twilioUser: payload,
        loading: false,
      };
    case GET_TWILIO_USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case GET_TWILIO_CHANNEL:
      return {
        ...state,
        currentChannel: payload,
        loading: false,
      };

    case GET_TWILIO_CHANNEL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FETCH_TWILIO_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false,
      };
    case FETCH_TWILIO_MESSAGES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
