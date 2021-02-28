import React from 'react'
import { Link } from 'react-router-dom'

const books = [
  {
    id: 1,
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    language: 'English',
  },
  {
    id: 2,
    title: 'Harry Potter',
    author: 'JK Rolling',
    language: 'English',
  },
  {
    id: 3,
    title: 'the story of my life',
    author: ' Hellen keller',
    language: 'English',
  },
  {
    id: 4,
    title: 'Power of your subconscious mind',
    author: 'Joseph Murphy',
    language: 'English',
  },
  {
    id: 5,
    title: 'Zero to one',
    author: 'Peter Theil',
    language: 'English',
  },
]

const Book = () => {
  const handleAddBook = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center aling-items-center">
        <div>
          <form className="row mt-5" onSubmit={handleAddBook}>
            <div className="col-4">
              <h5 className="text-center my-1">Search Book</h5>
            </div>
            <div className="col-6 p-0">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-2 pl-2">
              <button type="submit" className="btn btn-primary mb-3">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1 className="mt-4 avail-books">Available Books</h1>
      <div className="book-wrapper">
        {books.map((book) => (
          <div key={book.id} className="book-card mb-4">
            <Link to={'/' + book.id}>
              <p className="book-title m-0">Title : {book.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Book
