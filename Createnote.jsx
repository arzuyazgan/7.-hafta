/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Createnote = ({ inputText, setInputText, saveHandler }) => {
  const char = 100;
  const charLimit = char - inputText.length;

  return (
    <div className='note'>
      <textarea
        cols={10}
        rows={5}
        placeholder='Type...'
        maxLength={100}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <div className='note-footer'>
        <span className='label'>{charLimit} Left</span>
        <button className='note-save' onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Createnote;