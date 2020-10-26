import React, {useState} from 'react';
import './styles/App.css'
import {db} from './firebase';
import firebase from 'firebase';

const AddNoteForm = () => {

    const [titleFieldVisible, setTitleFieldVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const handleSubmit = (e) => {
      e.preventDefault();
      db.collection("notes").add({
        title: title,
        content: content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      hideTitleField();
      setTitle("");
      setContent("");
    }

    const showTitleField = () => {
        setTitleFieldVisible(true)
    }

    const hideTitleField = () => {
        setTitleFieldVisible(false)
    }

    return (
        <div>
          <div className="create-form">
            
			{titleFieldVisible && (
              <div className="backdrop" onClick={hideTitleField} />
            )}
            
			<form onSubmit={handleSubmit} className="create-note">
              {titleFieldVisible && (
                <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onFocus={showTitleField}
                name="title"
                placeholder="Title"
                />
              )}
			  
              <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              onFocus={showTitleField}
              name="content"
              placeholder="Take a note..."
              />
              <button onSubmit={handleSubmit} type="Submit">
                <span>&#43;</span>
              </button>
            </form>
          </div>
        </div>
    )
}

export default AddNoteForm
