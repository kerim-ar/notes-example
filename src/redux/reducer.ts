import {Action, NotesActions} from './actions'
import {Note} from '../model/Notes'
import {combineReducers} from 'redux'
import {notesModelListMaximum} from '../data/data'
import {createHistory} from '../model/History'

const initData:Note[] = notesModelListMaximum.notes

const history = createHistory<Note[]>(initData)

const notesReducer = (state: Note[] = initData, action: Action) => {
	switch (action.type) {
	case NotesActions.CHANGE_TITLE: {
		const newState = state.map(note => {
			if (note.id === action.payload.noteId) {
				return {
					...note,
					title: action.payload.newTitle,
				}
			}
			return note
		})

		history.addHistoryItem(newState)
		return newState
	}
	case NotesActions.CHANGE_TEXT: {
		const newState = state.map(note => {
			if (note.id === action.payload.noteId) {
				return {
					...note,
					text: action.payload.newText,
				}
			}
			return note
		})
		history.addHistoryItem(newState)
		return newState
	}
	case NotesActions.CHANGE_BACKGROUND: {
		const newState = state.map(note => {
			if (note.id === action.payload.noteId) {
				return {
					...note,
					background: action.payload.newBackground,
				}
			}
			return note
		})
		history.addHistoryItem(newState)
		return newState
	}
	case NotesActions.CHANGE_ORDER:
		const newNotes = [...state]
		const removed = newNotes.splice(action.payload.from, 1)
		newNotes.splice(action.payload.to, 0, removed[0])

		history.addHistoryItem(newNotes)
		return newNotes
	case NotesActions.ADD_NOTE: {
		const newState = [
			...state,
			action.payload
		]

		history.addHistoryItem(newState)
		return newState
	}
	case NotesActions.DELETE_NOTE: {
		const newState = state.filter(item => item.id !== action.payload.noteId)

		history.addHistoryItem(newState)
		return newState
	}
	case NotesActions.UNDO:
		const prevState = history.undo()
		if (prevState) {
			return prevState
		}
		return state
	case NotesActions.REDO:
		const nextState = history.redo()
		if (nextState) {
			return nextState
		}
		return state
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
