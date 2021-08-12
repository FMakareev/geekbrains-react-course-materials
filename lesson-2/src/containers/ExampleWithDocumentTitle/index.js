import React, {useEffect, useState} from 'react';
import {useDocumentTitle} from "../../hooks/useDocumentTitle";



export const ExampleWithDocumentTitle = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  }

  useEffect(() => {
    setTitle(document.title);
  }, [])

  useDocumentTitle(title);

  return (
    <div className="App">
      <input value={title} onChange={onChange} type="text"  />
    </div>
  );
};