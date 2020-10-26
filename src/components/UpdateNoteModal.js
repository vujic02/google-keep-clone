import React, { useState } from 'react';
import { db } from './firebase';
import firebase from 'firebase';
import DeleteIcon from './icons/DeleteIcon'

const  UpdateNoteModal = ({note, modal}) =>{
    
    const [mutableNote, setMutableNote] = useState(note);
    const [id, setId] = useState(mutableNote.id);
    const [title, setTitle] = useState(mutableNote.title);
    const [content, setContent] = useState(mutableNote.content);


    const dismissModal = () => {
        modal();
    }

    // prevent propagation / bubbling up
    const preventPropagation = (e) => {
        e.stopPropagation();
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('notes').doc(id).set({
            title: title,
            content: content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, {merge: true});
        dismissModal();
    }

    const handleDelete = (e) => {
        e.preventDefault()
        db.collection('notes').doc(id).delete();
        dismissModal();
    }


    return (
        <div>
            {note &&
                <div className="modal-backdrop" onClick={dismissModal} id="modalBox">
                    <div className="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalContent">
                        <form className="edit-form" onClick={preventPropagation} onSubmit={handleSubmit}>
                            <input id="modalTitle" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                            <textarea id="modalContent" name="content" value={content} onChange={e => setContent(e.target.value)}   />



                            <footer className="modal-footer">
                                <button onClick={handleDelete} type="button" className="delete-button">
                                <DeleteIcon />
                            </button>
                            <button type="submit" className="submit-button">
                                <span>Done</span>
                            </button>
                            </footer>
                            </form>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default UpdateNoteModal;
