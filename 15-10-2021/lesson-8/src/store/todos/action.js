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

const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

export const getTodosWithThunk = async (dispatch) => {

  dispatch(setLoading(true))
  dispatch(setError(false))
  dispatch(setData([]))

  try {
    const response = await fetch(TODOS_API);

    if (!response.ok) {
      throw new Error('any error')
    }

    const result = await response.json()

    dispatch(setData(result))
  } catch (e) {
    console.error(e);
    dispatch(setError(true))
  }

  dispatch(setLoading(false))
}
