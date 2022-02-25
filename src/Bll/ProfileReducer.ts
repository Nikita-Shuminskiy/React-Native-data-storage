import { ApiUserType, usersAPI } from "../Api/Api";
import { Dispatch } from "redux";
import { ActionsTypes } from "./Redux_Store";

type InitStateType = typeof initialState;
const initialState = {
  dataUsers: [] as ApiUserType[],
  totalCount: 10,
  currentPage: 1,
  pageSize: 10,
  isFetching: false,
  disabledInProgressUser: [] as Array<number>,
};

export function UserReducer(
  state = initialState,
  action: ActionsTypes
): InitStateType {
  const copyState = { ...state };
  switch (action.type) {
    case "USERS/SET-USERS":
      return { ...state, dataUsers: action.users };
    case "USER/FETCHING":
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
}

export const setUsers = (users: Array<ApiUserType>) =>
  ({ type: "USERS/SET-USERS", users } as const);
export const setIsFetching = (isFetching: boolean) =>
  ({ type: "USER/FETCHING", isFetching } as const);

export const getUsersThunk = () => {
  return (dispatch: Dispatch) => {
    usersAPI
      .getUsers(1, 20)
      .then((response) => {
        if (!!response) {
          dispatch(setUsers(response.items));
        }
      })
      .catch((err) => {
        alert("Error Users");
      })
      .finally(() => {
        dispatch(setIsFetching(false));
      });
  };
};
