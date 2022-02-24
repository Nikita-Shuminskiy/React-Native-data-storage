import { profileAPI } from "Api/Api";
import { Dispatch } from "redux";
import { ActionsTypes } from "./Redux_Store";

const initialState = {};
export type InitialStateType = typeof initialState;

export function UserReducer(
  state = initialState,
  action: ActionsTypes
): InitialStateType {
  switch (action.type) {
    default:
      return state;
  }
}

export const addPost = (newMessage: string) =>
  ({ type: "PROFILE/ADD-POST", newMessage } as const);

export const updateStatusThunk = (status: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        /*        dispatch(setProfileStatus(status));*/
      }
    });
  };
};
