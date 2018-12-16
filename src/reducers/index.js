import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

import UserReducer from "./UserReducer";
import ChannelReducer from "./ChannelReducer";
import ColorsReducer from "./ColorsReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  channel: ChannelReducer,
  colors: ColorsReducer
});

export default rootReducer;
