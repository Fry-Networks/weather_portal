import React, { useState } from 'react';

export default function OpenButton({ showModal,text }: { showModal: Function,text:string }) {

  return (
    <button
      onClick={() => showModal(true)}
      style={{
        ...buttonStyle,
        backgroundColor: 'yellow',
        width: 'fit-content',
        alignSelf: 'center',
      }}
    >
      {text}
    </button>
  );
}

const buttonStyle = {
  backgroundColor: 'yellow',
  border: 'none',
  color: 'black',
  padding: '15px 32px',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '5px',
};


