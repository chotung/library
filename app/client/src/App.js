import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import List from './components/List';

function App() {
	useEffect(() => {
		getAuthors()
		getBooks()
	},[])
	const [show, setShow]  = useState('books')
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
	const getBooks = async () => {
		try {
			const res = await axios.get("/book")
			const { data } = await res
			setBooks(data)
		} catch (err) {
			console.error(err)
		}
	}

	const showDetails = (id, type) => {
		if(type === 'author') {
			// route to author's details
			// get author's information 
			// and author's books
		} else {
			// route to book's details
			// get book's information
			// and a book's author(s)
		}
	}

	const renderAllAuthors = () => {
		if(authors.length !== 0) {
			return authors.map(author => {
				return (
					<List key={author.id} listItem={author} showDetails={showDetails} type='author'/>
				)
			})
		}
	}

	const renderAllBooks = () => {
		if(books.length !== 0) {
			return books.map(book => {
				return (
					<List key={book.id} listItem={book} showDetails={showDetails} type='book'/>
				)
			})
		}
	}

	const changeView = (e) => {
		const text = e.target.textContent.toLowerCase()
		setShow(text)
	}

  return (
    <div className="App">
			<header>
				{show === 'authors' ? <h1>Authors</h1>: <h1>Books</h1>}
			</header>
			<ul>
				{show === 'authors'? renderAllAuthors() : renderAllBooks()}
			</ul>
			<button onClick={changeView}>Authors</button>
			<button onClick={changeView}>Books</button>
    </div>
  );
}

export default App;
