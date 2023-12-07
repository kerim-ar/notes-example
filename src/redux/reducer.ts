import {Action, NotesActions} from './actions'
import {Note} from '../model/Notes'
import { combineReducers } from 'redux'
import {notesModelListMaximum} from '../data/data'

const initData:Note[] = notesModelListMaximum.notes

const notesReducer = (state: Note[] = initData, action: Action) => {
	switch (action.type) {
	case NotesActions.CHANGE_TITLE:
		return state.map(note => {
			if (note.id === action.payload.noteId) {
				return {
					...note,
					title: action.payload.newTitle,
				}
			}
			return note
		})
	case NotesActions.CHANGE_TEXT:
		return state.map(note => {
			if (note.id === action.payload.noteId) {
				return {
					...note,
					text: action.payload.newText,
				}
			}
			return note
		})
	case NotesActions.CHANGE_BACKGROUND:
		return state.map(note => {
			if (note.id === action.payload.noteId) {
				return {
					...note,
					background: action.payload.newBackground,
				}
			}
			return note
		})
	case NotesActions.CHANGE_ORDER:
		const newNotes = [...state]
		const removed = newNotes.splice(action.payload.from, 1)
		newNotes.splice(action.payload.to, 0, removed[0])
		return newNotes
	case NotesActions.ADD_NOTE:
		return [
			...state,
			action.payload
		]
	case NotesActions.DELETE_NOTE:
		return state.filter(item => item.id !== action.payload.noteId)
	default:
		return state
	}
}

const rootReducer = combineReducers({
	notes: notesReducer,
})

export {
	rootReducer,
}
