export const SET_ERROR_ANIMALS = "SET_ERROR_ANIMALS";
export const SET_LOADING_ANIMALS = "SET_LOADING_ANIMALS";
export const SET_DATA_ANIMALS = "SET_DATA_ANIMALS";

export const setLoading = (status) => ({
    type: SET_LOADING_ANIMALS,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR_ANIMALS,
    payload: status
});

export const setData = (todos) => ({
    type: SET_DATA_ANIMALS,
    payload: todos
});

const API_URL = "https://axoltlapi.herokuapp.com/";

export const getRandomAnimals = async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    try {
        const response = await fetch(API_URL, {
            mode: "no-cors"
        });

        const result = await response.json();

        dispatch(setData(result));
    } catch (e) {
        console.error(e);
        dispatch(setError(true));
    }

    dispatch(setLoading(false));
};
