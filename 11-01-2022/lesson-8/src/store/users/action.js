import {api} from "../../api/services";

export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status
});

export const setError = (status) => ({
  type: SET_ERROR,
  payload: status
});

export const setData = (todos) => ({
  type: SET_DATA,
  payload: todos
});


export const getUsersWithThunk = (page = 1) => async (dispatch) => {

  dispatch(setLoading(true))
  dispatch(setError(false))
  dispatch(setData([]))

  try {
    const result = await api.getUsers(page);

    const [error, result2] = await api.getUsers2(page);
    if (error) {
      dispatch(setError(true))
    } else {
      dispatch(setData(result2))
    }
    dispatch(setData(result))
  } catch (e) {
    console.error(e);
    dispatch(setError(true))
  }

  dispatch(setLoading(false))
}
