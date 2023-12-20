import {Note} from '../model/Notes'

enum NotesActions {
    CHANGE_TITLE = 'CHANGE_TITLE',
    CHANGE_TEXT = 'CHANGE_TEXT',
    CHANGE_BACKGROUND = 'CHANGE_BACKGROUND',
    CHANGE_ORDER = 'CHANGE_ORDER',
    ADD_NOTE = 'ADD_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    UNDO = 'UNDO',
    REDO = 'REDO',
}

type ChangeTitleAction = {
    type: NotesActions.CHANGE_TITLE,
    payload: {
        noteId: string,
        newTitle: string,
    },
}

type ChangeTextAction = {
    type: NotesActions.CHANGE_TEXT,
    payload: {
        noteId: string,
        newText: string,
    },
}

type ChangeBackgroundAction = {
    type: NotesActions.CHANGE_BACKGROUND,
    payload: {
        noteId: string,
        newBackground: string,
    },
}

type ChangeOrderAction = {
    type: NotesActions.CHANGE_ORDER,
    payload: {
        from: number,
        to: number,
    }
}

type AddNoteAction = {
    type: NotesActions.ADD_NOTE,
    payload: Note
}

type DeleteNoteAction = {
    type: NotesActions.DELETE_NOTE,
    payload: {
        noteId: string,
    }
}

type UndoAction = {
    type: NotesActions.UNDO,
}

type RedoAction = {
    type: NotesActions.REDO,
}

type Action = ChangeTitleAction | ChangeTextAction | ChangeBackgroundAction | ChangeOrderAction | AddNoteAction | DeleteNoteAction | UndoAction | RedoAction

export {
	NotesActions,
	type Action,
}
