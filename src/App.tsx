import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {ListView} from './components/ListView'
import {NotesModel} from './model/Notes'
import {notesModelListMaximum, notesModelListMedium, notesModelListMinimum} from './data/data'

function App() {
	return (
		<div className="App">
			<ListView notes={notesModelListMaximum.notes}></ListView>
		</div>
	)
}

export default App
