import React, {useState} from 'react';
import {Note} from "../model/Notes";
import styles from './NoteView.module.css';
import {generateRandomColor} from "../generateRandomColor";

function NoteView(props: {note: Note}) {
    const {title, text} = props.note

    const [background, setBackground] = useState(props.note.background)

    function onClick(): void {
        setBackground(generateRandomColor())
    }

    return (
        <div className={styles.note} style={{backgroundColor: background}} onClick={onClick}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export {
    NoteView,
}