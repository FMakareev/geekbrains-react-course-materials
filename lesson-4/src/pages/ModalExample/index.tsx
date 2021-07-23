import React from 'react';
import ReactModal from 'react-modal';
import { useHistory } from 'react-router-dom';

export const ModalExample = () => {
  const { goBack } = useHistory();
  console.log('ModalExample');
  return (
    <ReactModal
      isOpen
      contentLabel="Minimal Modal Example"
      onRequestClose={goBack}
    >
      <button onClick={goBack}>Close Modal</button>
    </ReactModal>
  );
};
