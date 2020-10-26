import React from 'react'


import EditIcon from './icons/EditIcon'; // edit icon

const Note = ({index, note, selected}) => {

    const hasNotes = (note.title || note.content)

    const editNote = () => {
        selected(note)
    }

    return (
        <div className="note" index={index}>
            <div onClick={editNote}><EditIcon/></div>
            {hasNotes ? (
                <div>
                {note.title && <h1>{note.title }</h1> }
                {note.content && <pre>{note.content}</pre> }
                </div>
            ) : (
                <div className="empty">Empty note</div> )
            }
        </div>
    )
}

export default Note;
