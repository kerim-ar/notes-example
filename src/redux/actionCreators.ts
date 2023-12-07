import {NotesActions} from './actions'
import {Note} from '../model/Notes'

function createChangeBackgroundAction(noteId: string, newBackground: string) {
	return {
		type: NotesActions.CHANGE_BACKGROUND,
		payload: {
			noteId,
			newBackground,
		},
	}
}

function createChangeTitleAction(noteId: string, newTitle: string) {
	return {
		type: NotesActions.CHANGE_TITLE,
		payload: {
			noteId,
			newTitle,
		},
	}
}

function createChangeTextAction(noteId: string, newText: string) {
	return {
		type: NotesActions.CHANGE_TEXT,
		payload: {
			noteId,
			newText,
		},
	}
}

function createChangeOrderAction(from: number, to: number) {
	return {
		type: NotesActions.CHANGE_ORDER,
		payload: {
			from,
			to,
		}
	}
}

function createAddNoteAction(note: Note) {
	return {
		type: NotesActions.ADD_NOTE,
		payload: note
	}
}

function createDeleteNoteAction(noteId: string) {
	return {
		type: NotesActions.DELETE_NOTE,
		payload: {
			noteId,
		}
	}
}

export {
	createChangeBackgroundAction,
	createChangeTitleAction,
	createChangeTextAction,
	createChangeOrderAction,
	createAddNoteAction,
	createDeleteNoteAction,
}
