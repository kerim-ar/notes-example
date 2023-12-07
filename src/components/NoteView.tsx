import {Note} from '../model/Notes'
import styles from './NoteView.module.css'
import {generateRandomColor} from '../generateRandomColor'
import {FillIcon} from './FillIcon'
import {joinCssClasses} from '../classes/joinCssClasses'
import {DndIcon} from './DndIcon'
import {RegisterDndItemFn} from '../hooks/useDraggableList'
import {useEffect, useRef} from 'react'
import {useAppActions} from '../redux/hooks'

type NoteViewProps = {
	index: number
	note: Note
	registerDndItem: RegisterDndItemFn
}

function NoteView(props: NoteViewProps) {
	const {
		index,
		note,
		registerDndItem,
	} = props

	const {
		createChangeBackgroundAction,
		createChangeTitleAction,
		createChangeTextAction,
	} = useAppActions()

	function onClick(): void {
		createChangeBackgroundAction(note.id, generateRandomColor())
	}

	const ref = useRef<HTMLDivElement>(null)
	const dndControlRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
		const {
			onDragStart,
		} = registerDndItem(index, {
			elementRef: ref,
			controlRef: dndControlRef,
		})

		const onMouseDown = (mouseDownEvent: MouseEvent) => {
			onDragStart({
				onDrag: dragEvent => {
					// TODO: можно вынести в стили и использовать как-то так ref.current!.classList.add(styles.dragging) либо через useState
					ref.current!.style.position = 'relative'
					ref.current!.style.zIndex = '1'
					ref.current!.style.boxShadow = 'black 2px 2px 4px'
					ref.current!.style.top = `${dragEvent.clientY - mouseDownEvent.clientY}px`
				},
				onDrop: dropEvent => {
					ref.current!.style.position = ''
					ref.current!.style.zIndex = ''
					ref.current!.style.boxShadow = ''
					ref.current!.style.top = ''
				},
			})
		}

		const control = dndControlRef.current!
		control.addEventListener('mousedown', onMouseDown)
		return () => control.removeEventListener('mousedown', onMouseDown)
	}, [index, registerDndItem])

	return (
		<div
			ref={ref}
			className={styles.note}
			style={{backgroundColor: note.background}}
		>
			<div
				ref={dndControlRef}
				className={joinCssClasses([
					styles.topButton,
					styles.dnd,
				])}
			>
				<DndIcon/>
			</div>
			<div
				onClick={onClick}
				className={joinCssClasses([
					styles.topButton,
					styles.fill,
				])}
			>
				<FillIcon/>
			</div>
			<input
				className={styles.title}
				value={note.title}
				onChange={event => {
					createChangeTitleAction(note.id, event.target.value)
				}}
				placeholder='Add note title...'
			/>
			<textarea
				value={note.text}
				className={styles.text}
				onChange={event => {
					createChangeTextAction(note.id, event.target.value)
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
