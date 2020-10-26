import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import Note from './Note';

const AllNotes = ({selected}) => {

    const [notes, setNotes] = useState([]); 

        useEffect(() => {
            db.collection('notes').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setNotes(snapshot.docs.map(doc => ({id: doc.id, title: doc.data().title, content: doc.data().content }) ))
            })


        }, []) 

        console.log(notes)
    return (
        <div className="notes">
            {notes.map(note => (
                <Note note={note}  selected={selected}/>
            ))}
        </div>
    )
}

export default AllNotes;
