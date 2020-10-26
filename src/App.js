import React, { useState, useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import AllNotes from './components/AllNotes';
import UpdateNoteModal from './components/UpdateNoteModal';
import Header from './components/Header';

import {autoExpand} from './components/utils'


function App() {
  
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const noteSelected = note => {
      setShowModal(true)
      setSelectedNote(note)
      console.log(note, ' is selected!');
    }
  
    const closeModal = () => {
      setShowModal(false)
      setSelectedNote(null)
    console.log('No note is selected and modal is not active!<br>Show Modal: ', showModal);
    }
  
    useEffect(() => {
      
      document.addEventListener('input', event => {
        if (event.target.tagName.toLowerCase() !== 'textarea') {
          return
        }
        autoExpand(event.target)
      }, false)
      
    }, []) // useEffect
    
  
    return (
        <div className="app">
          <Header pageTitle="Google Keep Clone With React.js + Firebase" />
    
          <AddNoteForm />
  
          <AllNotes selected={noteSelected}/>
    
          {showModal &&
            <UpdateNoteModal modal={closeModal} note={selectedNote}/>
          }
        </div>
    )
  }
  

export default App;
