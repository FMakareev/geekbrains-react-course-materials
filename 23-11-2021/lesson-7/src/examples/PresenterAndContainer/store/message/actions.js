import {messagesApi} from "../../api/messagesApi";

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
        message,
        id
    }
})

export const createAddMessageError = (error) => ({
    type: ADD_MESSAGE_ERROR,
    payload: error,
})

export const createRemoveMessage = (id) => ({
    type: REMOVE_MESSAGE,
    payload: id
})



export const createAddMessageRequest = (messageText) => async (dispatch) => {

    const message = {
        id: Date.now(),
        message: messageText,
    }

    dispatch(createAddMessageLoading(true))

    await messagesApi.addMessage();

    dispatch(createAddMessageSuccess(message))

    dispatch(createAddMessageLoading(false))
}

export const createRemoveMessageRequest = (messageId) => async (dispatch) => {

    dispatch(createAddMessageLoading(true))

    await messagesApi.removeMessage();
    dispatch(createRemoveMessage(messageId))

    dispatch(createAddMessageLoading(false))

}
