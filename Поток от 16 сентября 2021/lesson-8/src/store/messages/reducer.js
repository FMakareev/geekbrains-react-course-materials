export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
});

export const addMessageThunk = (message) => (dispatch, getState) => {
  dispatch(addMessage(message));

  if (message.author !== "me") {
    return;
  }

  const messageFromBot = {
    author: "bot",
    message: "message from bot",
    id: Date.now()
  };

  setTimeout(() => {
    dispatch(addMessage(messageFromBot));
  }, 2000);
};

const initialState = {
  messages: []
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        messages: [...state.messages, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};
