// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Createnote from './Createnote';
import './notes.css';
import { v4 as uuid } from 'uuid';
import Note from './Note';

const Notes = () => {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState([]);

  const saveHandler = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText('');
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Notes'));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='notes'>
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} />
      ))}
      <Createnote inputText={inputText} setInputText={setInputText} saveHandler={saveHandler} />
    </div>
  );
};

export default Notes;