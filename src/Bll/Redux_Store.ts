import { applyMiddleware, combineReducers, createStore, Dispatch } from "redux";
import ThunkMiddleware from "redux-thunk";
import { setIsFetching, setUsers, UserReducer } from "./ProfileReducer";

export type ActionsTypes =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setIsFetching>;

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = Dispatch<ActionsTypes>;

const rootReducer = combineReducers({
  userReducer: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
