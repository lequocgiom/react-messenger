import { FETCH_CONVERSATION, GENERATE_JWT } from "./types";
import com from "../../utils";
import Axios from "axios";

export const fetchConversations = () => async (dispatch) => {
  //   console.log("fetch conversation actions");
  try {
    const res = await Axios.get(`${com.root}/api/v1/conversation:fetchAll`);
    // console.log(res);
    let newConversations = res.data.data.map((item) => {
      return {
        id: item.id,
        name: `${item.nameConversation}`,
        channelName: `CHATBOX_${item.id}`,
        data: `${item.nameConversation}`,
      };
    });
    dispatch({
      type: FETCH_CONVERSATION,
      payload: newConversations,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getJWT = () => async (dispatch) => {
  //   console.log("fetch conversation actions");
  try {
    const res = await Axios.get(
      `${com.root}/api/v1/twilio:generateJwt?email=voduykhanhnc@gmail.com`
    );
    // console.log(res);
    dispatch({
      type: GENERATE_JWT,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};
