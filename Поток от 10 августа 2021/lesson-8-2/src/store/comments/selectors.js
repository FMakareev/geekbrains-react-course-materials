

export const getComments = (state) => state.comments;

export const getCommentsLoading =(state) => getComments(state).isLoading;

export const getCommentsError =(state) => getComments(state).error;

export const getCommentsData =(state) => getComments(state).data;


export const commentsSelectors = {
  getComments,
  getCommentsLoading,
  getCommentsError,
  getCommentsData,
}