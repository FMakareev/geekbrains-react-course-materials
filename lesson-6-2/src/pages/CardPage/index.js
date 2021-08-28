import React from 'react';
import {CreateCardForm} from "../../components/CreateCardForm";
import {useParams} from "react-router-dom";
import {CardList} from "../../components/CardList";


export const CardPage = (props) => {
  const {collectionId} = useParams();
  return (
    <div>
      <CreateCardForm collectionId={collectionId}/>
      <CardList collectionId={collectionId}/>
    </div>
  );
};