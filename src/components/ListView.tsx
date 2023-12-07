import { useRef } from 'react'
import {useDraggableList} from '../hooks/useDraggableList'
import {Note} from '../model/Notes'
import {NoteView} from './NoteView'
import styles from './ListView.module.css'
import {useAppActions, useAppSelector} from '../redux/hooks'
import {getNote} from '../model/utils'

type ListViewProps = {
    notes: Array<Note>,
}

function List(props: ListViewProps) {
	const {
		notes,
	} = props

	const ref = useRef<HTMLDivElement>(null)
	const {createChangeOrderAction} = useAppActions()

	const {
		registerDndItem,
	} = useDraggableList({
		onOrderChange: createChangeOrderAction
	})

	return (
		<div ref={ref} className={styles.list}>
			{notes.map((note, index) => (
				<NoteView
					key={note.id}
					index={index}
					note={note}
					registerDndItem={registerDndItem}
				/>
			))}
		</div>
	)
}

function ListView() {
	const notes = useAppSelector(state => state.notes)
	const {createAddNoteAction} = useAppActions()

	const notArchivedNotes = notes.filter(note => !note.isArchived)
	const pinnedNotes = notArchivedNotes.filter(note => note.isPinned)
	const unpinnedNotes = notArchivedNotes.filter(note => !note.isPinned)

	return (
		<div>
			<div>
				<p>Pinned</p>
				<List
					notes={pinnedNotes}
				/>
			</div>
			<div>
				<p>Others</p>
				<List
					notes={unpinnedNotes}
				/>
			</div>
			<button onClick={() => createAddNoteAction(getNote())}>Add Note</button>
		</div>
	)
}

export {
	ListView,
}
