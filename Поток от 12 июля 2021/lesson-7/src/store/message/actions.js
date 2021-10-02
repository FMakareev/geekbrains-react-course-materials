import {messagesApi} from "../../api/messagesApi";

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const ADD_MESSAGE_LOADING = 'ADD_MESSAGE_LOADING';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_ERROR = 'ADD_MESSAGE_ERROR';

export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const createAddMessageLoading = (isLoading) => ({
    type: ADD_MESSAGE_LOADING,
    payload: isLoading,
})

export const createAddMessageSuccess = ({message, id}) => ({
    type: ADD_MESSAGE_SUCCESS,
    payload: {
        message, id
    }
})

export const createAddMessageError = (error) => ({
    type: ADD_MESSAGE_ERROR,
    payload: error,
})


export const createAddMessageRequest = (message) => async (dispatch) => {

    dispatch(createAddMessageLoading(true))

    const [error, result] = await messagesApi.addMessage();

    if (error) {
        dispatch(createAddMessageError(error))
    }

    if (result) {
        dispatch(createAddMessageSuccess(message))
    }

    dispatch(createAddMessageLoading(false))
}

export const createRemoveMessage = (id) => ({
    type: REMOVE_MESSAGE,
    payload: id
})
