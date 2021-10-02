import {ADD_COLLECTION, REMOVE_COLLECTION} from "./index";


const initialState = {
  collections: [],
}

const filterById = (targetId) => ({id}) => targetId !== id;

export const collectionsReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_COLLECTION: {
      return  {
        collections: [
          ...state.collections,
          action.payload,
        ],
      }
    }
    case REMOVE_COLLECTION: {

      return  {
        collections: state.collections.filter(filterById(action.payload)),
      }
    }
    default: {
      return state;
    }
  }
}