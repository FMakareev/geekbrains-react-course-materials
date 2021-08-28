

export const ADD_COLLECTION = 'ADD_COLLECTION';

export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';

/**
 * @param {object} collection
 * @param {string} collection.id
 * @param {string} collection.title
 * */
export const createAddCollection = (collection) => ({
  type: ADD_COLLECTION,
  payload: collection,
})

export const createRemoveCollection = (collectionId) => ({
  type: REMOVE_COLLECTION,
  payload: collectionId,
})