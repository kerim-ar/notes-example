import React from 'react';
import {Note} from "../model/Notes";
import {NoteView} from "./NoteView";

type ListViewProps = {
    notes: Array<Note>,
}
function ListView(props: ListViewProps) {
    const {notes} = props
    const notArchivedNotes = notes.filter(note => !note.isArchived)
    return (
        <div>
            <div>
                <p>Pinned</p>
                {notArchivedNotes.map(note => note.isPinned && <NoteView key={note.id} note={note}></NoteView>)}
            </div>
            <div>
                <p>Others</p>
                {notArchivedNotes.map(note => !note.isPinned && <NoteView key={note.id} note={note}></NoteView>)}
            </div>
        </div>
    )
}

export {
    ListView,
}