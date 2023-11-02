import {Note, NotesModel} from "../model/Notes";

const notesModelGridMinimum: NotesModel = {
    viewMode: 'grid',
    notes: [],
}

const notesModelListMinimum: NotesModel = {
    viewMode: 'list',
    notes: [],
}


const note: Note = {
    id: 'id0',
    title: 'Title1',
    text: 'Text1',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteOnlyTitle: Note = {
    id: 'id1',
    title: 'Only title',
    text: '',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteOnlyText: Note = {
    id: 'id2',
    title: '',
    text: 'Only text',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteLongTitle: Note = {
    id: 'id3',
    title: 'Long title long title long title long title long title long title long title long title long title long title long title long title long title long title long title long title',
    text: '',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteLongText: Note = {
    id: 'id4',
    title: '',
    text: 'Long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteLongTitleAndText: Note = {
    id: 'id5',
    title: 'Long title long title long title long title long title long title long title long title long title long title long title long title long title long title long title long title',
    text: 'Long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const notePinned: Note = {
    id: 'id6',
    title: 'Pinned Note Title',
    text: 'Text',
    background: "#f39f76",
    isPinned: true,
    isArchived: false,
}

const noteArchived: Note = {
    id: 'id7',
    title: 'Archived Note Title',
    text: 'Text',
    background: "#f39f76",
    isPinned: false,
    isArchived: true,
}

const notePinnedAndArchived: Note = {
    id: 'id8',
    title: 'Pinned And Archived Title',
    text: 'Text',
    background: "#f39f76",
    isPinned: true,
    isArchived: true,
}

const notesModelGridMedium: NotesModel = {
    viewMode: 'grid',
    notes: [note],
}

const notesModelListMedium: NotesModel = {
    viewMode: 'list',
    notes: [note],
}

const notesModelGridMaximum: NotesModel = {
    viewMode: 'grid',
    notes: [note, noteOnlyTitle, noteOnlyText, noteLongTitle, noteLongText, noteLongTitleAndText, notePinned, noteArchived, notePinnedAndArchived],
}

const notesModelListMaximum: NotesModel = {
    viewMode: 'list',
    notes: [note, noteOnlyTitle, noteOnlyText, noteLongTitle, noteLongText, noteLongTitleAndText, notePinned, noteArchived, notePinnedAndArchived],
}

export {
    notesModelGridMinimum,
    notesModelListMinimum,

    notesModelGridMedium,
    notesModelListMedium,

    notesModelGridMaximum,
    notesModelListMaximum,
}
