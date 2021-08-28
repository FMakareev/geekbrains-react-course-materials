import React from 'react';
import {CreateCollectionForm} from "../../components/CreateCollectionForm";
import {CollectionList} from "../../components/CollectionList";

export const CollectionsPage = (props) => {
  return (
    <div>
      <CreateCollectionForm/>
      <CollectionList list={[{id: '1', title: '1'}]}/>
    </div>
  );
};