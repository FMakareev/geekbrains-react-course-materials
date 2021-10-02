import {connect} from "react-redux";
import {collectionsSelectors, createAddCollection, createRemoveCollection} from "../../store/collections";


const mapStateToProps = (state) => ({
  collections: collectionsSelectors.getCollections(state),
})

const mapDispatchToProps = (dispatch) => ({
  addCollection(collection) {
    return dispatch(createAddCollection(collection));
  },
  removeCollection(collectionId) {
    return dispatch(createRemoveCollection(collectionId));
  }
})


export const collectionsConnect = connect(mapStateToProps, mapDispatchToProps);