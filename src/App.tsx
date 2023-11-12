import {useEffect, useState} from 'react'
import './App.css'
import {ListView} from './components/ListView'
import {Note, NotesModel} from './model/Notes'
import {notesModelListMaximum, notesModelListMedium, notesModelListMinimum} from './data/data'
import {PreloaderContainer} from './components/Preloader'

function App() {
	const [notes, setNotes] = useState<Array<Note>|null>(null)

	useEffect(() => {
		// делаем вид что загружаем данные с сервера
		setTimeout(() => {
			setNotes(notesModelListMaximum.notes)
		}, 1200)
	}, [])

	const content = notes
		? <ListView
			notes={notes}
			setNotes={setNotes}
		/>
		: <PreloaderContainer/>

	return (
		<div className="App">
			{content}
		</div>
	)
}

export default App
