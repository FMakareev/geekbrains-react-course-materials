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

export const getDataAsync = async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setData([]));
  dispatch(setError(false));
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();
    dispatch(setData(data));
  } catch (e) {
    console.log(e);
    dispatch(setError(true));
  }
  dispatch(setLoading(false));
};
