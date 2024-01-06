// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Note = ({ id, text }) => {
  return (
    <div className='note'>
      <div className='note-body'>{text}</div>
      <div className='note-footer' style={{ justifyContent: 'flex-end' }}>
        <button className='note-save'>Delete</button>
        <button className='note-save'>Edit</button>
      </div>
    </div>
  );
};

export default Note;