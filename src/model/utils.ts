import {Note} from './Notes'
import {generateRandomId} from '../generateRandomId'

function getNote(): Note {
	return {
		id: generateRandomId(),
		title: '',
		text: '',
		background: '#ffffff',
		isPinned: false,
		isArchived: false,
	}
}

export {
	getNote,
}
