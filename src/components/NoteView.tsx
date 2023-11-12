import {Note} from '../model/Notes'
import styles from './NoteView.module.css'
import {generateRandomColor} from '../generateRandomColor'
import { FillIcon } from './FillIcon'

type NoteViewProps = {
	note: Note,
	setNote: (note: Note) => void,
}

function NoteView(props: NoteViewProps) {
	const {
		note,
		setNote,
	} = props

	function onClick(): void {
		setNote({
			...note,
			background: generateRandomColor()
		})
	}

	return (
		<div
			className={styles.note}
			style={{backgroundColor: note.background}}
		>
			<div
				onClick={onClick}
				className={styles.fill}
			>
				<FillIcon/>
			</div>
			<input
				className={styles.title}
				value={note.title}
				onChange={event => {
					setNote({
						...note,
						title: event.target.value,
					})
				}}
				placeholder='Add note title...'
			/>
			<textarea
				value={note.text}
				className={styles.text}
				onChange={event => {
					setNote({
						...note,
						text: event.target.value,
					})
				}}
				placeholder='Add note text...'
				rows={4}
			/>
		</div>
	)
}

export {
	NoteView,
}