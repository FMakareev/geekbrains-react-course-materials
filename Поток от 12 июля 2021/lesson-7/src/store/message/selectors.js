
export const getMessagesSelector = (state) => state.messages?.messages || [];

export const getMessagesLoadingStatusSelector = (state) => state.messages?.isLoading;
