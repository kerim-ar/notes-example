import {Note} from '../model/Notes'
import {NoteView} from './NoteView'

type ListViewProps = {
    notes: Array<Note>,
	setNotes: (notes: Array<Note>) => void,
}

function ListView(props: ListViewProps) {
	const {
		notes,
		setNotes,
	} = props
	const notArchivedNotes = notes.filter(note => !note.isArchived)

	return (
		<div>
			<div>
				<p>Pinned</p>
				{notArchivedNotes.map(note => note.isPinned && (
					<NoteView
						key={note.id}
						note={note}
						setNote={newNote => {
							setNotes(notes.map(note => {
								if (newNote.id === note.id) {
									return newNote
								}
								return note
							}))
						}}
					/>
				))}
			</div>
			<div>
				<p>Others</p>
				{notArchivedNotes.map(note => !note.isPinned && (
					<NoteView
						key={note.id}
						note={note}
						setNote={newNote => {
							setNotes(notes.map(note => {
								if (newNote.id === note.id) {
									return newNote
								}
								return note
							}))
						}}
					/>
				))}
			</div>
		</div>
	)
}

export {
	ListView,
}