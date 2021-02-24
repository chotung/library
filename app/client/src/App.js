import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
	useEffect(() => {
		getAuthors()
	},[])

	const [authors, setAuthors] = useState([])
	const [books, setBooks] = useState([])


	const getAuthors = async () => {
		try {
			const res = await axios.get("/author")
			const { data } = await res
			setAuthors(data)
		} catch (err) {
			console.error(err)
		}
	}
	const renderAllAuthors = () => {
		if(authors.length !== 0) {
			return authors.map(author => {
				return (
					<li key={author.id}>
						{author.name}
					</li>
				)
			})
		}
	}

	const renderAllBooks = () => {
		
	}

  return (
    <div className="App">
			<ul>
				{renderAllAuthors()}
			</ul>
    </div>
  );
}

export default App;
