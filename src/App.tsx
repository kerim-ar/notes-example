import {useEffect, useState} from 'react'
import './App.css'
import {ListView} from './components/ListView'
import {Note} from './model/Notes'
import {notesModelListMaximum} from './data/data'
import {PreloaderContainer} from './components/Preloader'
import {useUndoRedoListeners} from './hooks/useUndoRedoListeners'

function App() {
	const [notes, setNotes] = useState<Array<Note>|null>(null)

	useEffect(() => {
		// делаем вид что загружаем данные с сервера
		setTimeout(() => {
			setNotes(notesModelListMaximum.notes)
		}, 1200)
	}, [])

	useUndoRedoListeners()

	const content = notes
		? <ListView/>
		: <PreloaderContainer/>

	return (
		<div className="App">
			{content}
		</div>
	)
}

export default App
