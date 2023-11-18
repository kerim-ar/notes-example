import { useRef } from 'react'
import {useDraggableList} from '../hooks/useDraggableList'
import {Note} from '../model/Notes'
import {NoteView} from './NoteView'
import styles from './ListView.module.css'

type ListViewProps = {
    notes: Array<Note>,
	setNotes: (notes: Array<Note>) => void,
}

function List(props: ListViewProps) {
	const {
		notes,
		setNotes,
	} = props

	const ref = useRef<HTMLDivElement>(null)

	const {
		registerDndItem,
	} = useDraggableList({
		onOrderChange: (from, to) => {
			const newNotes = [...notes]
			const removed = newNotes.splice(from, 1)
			newNotes.splice(to, 0, removed[0])
			setNotes(newNotes)
		}
	})

	return (
		<div ref={ref} className={styles.list}>
			{notes.map((note, index) => (
				<NoteView
					key={note.id}
					index={index}
					note={note}
					setNote={newNote => {
						setNotes(notes.map(note => {
							if (newNote.id === note.id) {
								return newNote
							}
							return note
						}))
					}}
					registerDndItem={registerDndItem}
				/>
			))}
		</div>
	)
}

function ListView(props: ListViewProps) {
	const {
		notes,
		setNotes,
	} = props
	const archivedNotes = notes.filter(note => note.isArchived)
	const notArchivedNotes = notes.filter(note => !note.isArchived)
	const pinnedNotes = notArchivedNotes.filter(note => note.isPinned)
	const unpinnedNotes = notArchivedNotes.filter(note => !note.isPinned)

	return (
		<div>
			<div>
				<p>Pinned</p>
				<List
					notes={pinnedNotes}
					setNotes={newPinnedNotes => {
						setNotes([...newPinnedNotes, ...unpinnedNotes, ...archivedNotes])
					}}
				/>
			</div>
			<div>
				<p>Others</p>
				<List
					notes={unpinnedNotes}
					setNotes={newUnpinnedNotes => {
						setNotes([...pinnedNotes, ...newUnpinnedNotes, ...archivedNotes])
					}}
				/>
			</div>
		</div>
	)
}

export {
	ListView,
}