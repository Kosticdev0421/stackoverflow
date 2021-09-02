import { combineReducers } from "redux";
import { infoReducer } from "./api/api.reducer";
import {authReducer} from './auth/auth.reducer';
export const rootReducer=combineReducers({
  auth:authReducer,
  info:infoReducer
})