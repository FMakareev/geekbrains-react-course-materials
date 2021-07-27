

export const ADD_USER_ACTION = 'ADD_USER_ACTION';
export const REMOVE_USER_ACTION = 'REMOVE_USER_ACTION';


export const createAddUserAction = (user) => ({
    type: ADD_USER_ACTION,
    payload: user,
})

export const createRemoveUserAction = (userId) => ({
    type: REMOVE_USER_ACTION,
    payload: userId,
})