import {userApi} from "../../api/request/user";


export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const createLoginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
})

export const createLogoutUser = () => ({
  type: LOGOUT_USER
})

export const initAuthAction = (dispatch) => {
  userApi.initAuth((user) => {
    if (user) {
      dispatch(createLoginUser(user))
    } else {
      dispatch(createLogoutUser())
    }
  })
}